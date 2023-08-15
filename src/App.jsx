import React, { useEffect, useState } from "react";
import CohortList from "./Components/CohortList";
import StudentsList from "./Components/StudentsList";
import students from "./data/data.json";
import StudentGrid from "./Components/StudentGrid";
import StudentDetails from "./Components/StudentDetails";
import { Button } from "react-bootstrap";

function App() {
  console.log(students);
  const [selectedCohort, setSelectedCohort] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [view, setView] = useState("grid");
  const [notes, setNotes] = useState([]);
  const [currentStudents, setCurrentStudents] = useState(students);


  const onAddNote = (newNote, studentId) => {
    setNotes({...notes, [studentId] : [...(notes[studentId] || []), newNote],
  });
};

  function onCohortClick(cohort) {
    setSelectedCohort(cohort);
    if (cohort === "All") {
    }
  }

  const studentsFilteredByCohort =
    selectedCohort === "All"
      ? currentStudents
      : currentStudents.filter((student) => {
          const cohortCode = student.cohort.cohortCode;
          const [season, year] = cohortCode.split(/(\d+)/);
          return `${season} ${year}` === selectedCohort;
        });

  const cohortCodes = [
    ...new Set(students.map((student) => student.cohort.cohortCode)),
  ];

  const studentCount = () => {
    return currentStudents.length;
  };

  const handleStudentClick = (student, onAddNote, studentNotes) => {
    setSelectedStudent(student);
    setView("details");
    return students.length;
  };

  const toggleView = () => {
    setView((prevView) => (prevView === "list" ? "grid" : "list"));
  };

  const unenrollStudent = (studentId) => {
    const updatedStudents = currentStudents.filter(student => student.id !== studentId);
    setCurrentStudents(updatedStudents);
}


  return (
    <>
      <div className="parent">
        <video className="background-video" autoPlay muted>
          <source
            src="public/pursuit-gray_with_arrow-small (Original).mp4"
            type="video/mp4"
          />
        </video> 
        <div className="header">
          <h1 className="display-3">Student Dashboard</h1>
          <br />
        </div>
        <br />
        <div className="student-count">
          Student Population: {studentCount()}
        </div>
        <Button className="gridView-button" onClick={toggleView}>{view ==="list" ? "Grid View" : "List View"}</Button>
      </div>
      <div className="content-container">
        <CohortList
          cohorts={cohortCodes}
          onCohortClick={onCohortClick}
          selectedCohort={selectedCohort}
        />
        {view === "list" ? (
          <StudentsList
            students={studentsFilteredByCohort}
            selectedCohort={selectedCohort}
            onAddNote={onAddNote}
            notes={notes}
          />
        ) : ( view === "grid" ? (
          <StudentGrid
            students={studentsFilteredByCohort}
            handleStudentClick={handleStudentClick}
            setSelectedCohort={setSelectedCohort}
            onAddNote={onAddNote}
            notes={notes}
            unenrollStudent={unenrollStudent}
          />
        ) : (
          <StudentDetails student={selectedStudent} onAddNote={onAddNote} />
        )
        )}
      </div>
    </>
  );
}

export default App;
