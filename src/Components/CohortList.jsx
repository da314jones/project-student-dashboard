import React from 'react'

export default function CohortList({cohorts, onCohortClick}) {
  
  const cohortGroups = cohorts.reduce((result, cohortCode) => {
    const [season, year] = cohortCode.split(/(\d+)/).filter(Boolean);
    const readableCohort = `${season} ${year}`;

    if ( !result[readableCohort]) {
      result[readableCohort] =[];
    }
    result[readableCohort].push(cohortCode);
    return result;
  }, {});


  return (
    <div>
      <button onClick={() => onCohortClick("all")}>All Student</button>
      {Object.keys(cohortGroups).map((cohort, index) => (
        <button key={index} onClick={() => onCohortClick(cohort)}>{cohort}</button>
      ))}
    </div>
  )
}
