import React from "react";
import "./StudentGrid.css"; 

export default function StudentGrid({
  students,
  handleStudentClick,
  setSelectedCohort,
  onAddNote,
  notes
}) {
  const cohortGroups = students.reduce((result, student) => {
    const cohortCode = student.cohort.cohortCode;
    const [season, year] = cohortCode.split(/(\d+)/);
    const readableCohort = `${season} ${year}`;

    if (!result[readableCohort]) {
      result[readableCohort] = [];
    }
    result[readableCohort].push(student);
    return result;
  }, {});

  return (
    <div className="student-grid">
      {Object.keys(cohortGroups).map((cohort, index) => (
        <div key={index}>
          <h3>{cohort}</h3>
          <div className="cohort-students">
            {cohortGroups[cohort].map((student, studentIndex) => (
              <div
                key={studentIndex}
                className="student-card"
                onClick={() => handleStudentClick(student)}
              >
                <img
                  src={student.profilePhoto}
                  alt={`${student.names.preferredName}'s profile`}
                  className="student-image"
                />
                <p className="student-name">{student.names.preferredName}</p>
                <p className="cohort-code">{student.cohort.cohortCode}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
