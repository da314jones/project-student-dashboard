import React from 'react'
import "./CohortList.css"
import Button from "react-bootstrap/Button";


export default function CohortList({ cohorts, onCohortClick, selectedCohort }) {

  const getCohortSeason = (cohort) => {
    if (cohort === selectedCohort) {
      const [season] = cohort.split(" ");
    switch (season.toLowerCase()) {
      case "spring":
        return "spring-cohort";
      case "summer":
        return "summer-cohort";
      case "fall":
        return "autumn-cohort";
      case "winter":
        return "winter-cohort";
      default:
        return "";
    }
  }
  return ""
};

  const cohortGroups = cohorts.reduce((result, cohortCode) => {
    const [season, year] = cohortCode.split(/(\d+)/);
    const readableCohort = `${season} ${year}`;

    if (!result[readableCohort]) {
      result[readableCohort] = [];
    }
    result[readableCohort].push(cohortCode);
    return result;
  }, {});

  

  return (
    <div className="cohorts" >
      <h2>Choose a Class by Start Date</h2>
      <h3><Button className='all-button' variant="" onClick={() => onCohortClick("All")}>All Students</Button></h3>
      {Object.keys(cohortGroups).map((cohort, index) => (
        <button key={index} className={`cohort-button ${getCohortSeason(cohort)}`} onClick={() => onCohortClick(cohort)}>{cohort}</button>
      ))}
    </div>
  )
}
