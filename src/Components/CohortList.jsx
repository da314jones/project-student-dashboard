import React from 'react'
import "./CohortList.css"
import Button from "react-bootstrap/Button";


export default function CohortList({cohorts, onCohortClick}) {
  
  const cohortGroups = cohorts.reduce((result, cohortCode) => {
    const [season, year] = cohortCode.split(/(\d+)/);
    const readableCohort = `${season} ${year}`;

    if ( !result[readableCohort]) {
      result[readableCohort] =[];
    }
    result[readableCohort].push(cohortCode);
    return result;
  }, {});



  return (
    <div className="cohorts" >
      <h2>Choose a Class by Start Date</h2>
      <h3><button className='all-button'variant="" onClick={() => onCohortClick("All")}>All Students</button></h3>
      {Object.keys(cohortGroups).map((cohort, index) => (
        <button key={index} className='cohort-button' onClick={() => onCohortClick(cohort)}>{cohort}</button>
      ))}
    </div>
  )
}
