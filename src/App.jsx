import { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentsList from "./Components/StudentsList";
import students from "./data/data.json"


function App() {
  
  console.log(students)
  const [selectedCohort, setSelectedCohort] = useState('All')
  
  function onCohortClick(cohort) {
    setSelectedCohort(cohort);
    if (cohort === "All") {
      window.location.reload()
    }
  }

  const studentsFilteredByCohort = (selectedCohort) === "All"
  ? students : students.filter(student => {
    const cohortCode = student.cohort.cohortCode;
    const [season, year] = cohortCode.split(/(\d+)/);
    return `${season} ${year}` === selectedCohort;
  })

  const cohortCodes = [...new Set(students.map(student => student.cohort.cohortCode))]

const studentCount = () => {
  return students.length
}

  return (
    <>
    <div className="parent" >
      <video className="background-video" autoPlay   muted>
        <source src="public/pursuit-gray_with_arrow-small (Original).mp4"type="video/mp4" />
      </video>
      <div className="header">
    <h1 className="display-3" >Student Dashboard</h1>
    </div>
    <span className="student-count" >Student Population: {studentCount()}</span>
      </div>
      <div className="content-container">
      <CohortList cohorts={cohortCodes} onCohortClick={onCohortClick} />
      <StudentsList students={studentsFilteredByCohort} selectedCohort={selectedCohort} />
    </div>
    </>
  );
}

export default App;
