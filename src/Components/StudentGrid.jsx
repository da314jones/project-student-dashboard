import React, { useState } from "react";
import "./StudentGrid.css";
import {
  Modal,
  Button,
  Col,
  Container,
  Row,
  ListGroup,
  Card,
} from "react-bootstrap";

export default function StudentGrid({
  students,
  handleStudentClick,
  setSelectedCohort,
  onAddNote,
  notes,
}) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleGridClick = (student) => {
    setSelectedStudent(student);
  };
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
  console.log(selectedStudent);

  const handleClose = () => setSelectedStudent(null);

  const onTrack = () => {
    if (selectedStudent) {
      const { resume, linkedin, github, mockInterview } =
        selectedStudent.certifications;
      const currentTotal = selectedStudent.codewars.current.total;

      return resume &&
        linkedin &&
        mockInterview &&
        github &&
        currentTotal >= 600
        ? "On Track"
        : "Off Track";
    }
    return "N/A";
  };

  const trackStatus = onTrack();

  return (
    <div className="layout">
    <div className="student-grid">
      {Object.keys(cohortGroups).map((cohort, index) => (
        <div key={index}>
          <h3>{cohort}</h3>
          <div className="cohort-students">
            {cohortGroups[cohort].map((student, studentIndex) => (
              <div
                key={studentIndex}
                className={`student-card ${selectedStudent && student.id === selectedStudent.id
                    ? "selected"
                    : ""
                  }`}
                onClick={() => handleGridClick(student)}
              >
                <img
                  src={student.profilePhoto}
                  alt={`${student.names.preferredName}'s profile`}
                  className="student-image"
                />
                <p className="student-name">{student.names.preferredName}</p>
                <p className="cohort-code">{student.cohort.cohortCode}</p>
                <button onClick={(e) => {
                e.stopPropagation(); // Prevent the card's click event from firing
                unenrollStudent(student.id);
              }} className="unenroll-button">
                Unenroll
              </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedStudent && (
  <Modal
    className="modal-detail"
    show={selectedStudent !== null}
    onHide={handleClose}
  >
    <Modal.Header closeButton>
      <Modal.Title>{selectedStudent?.names?.preferredName}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="gridView-modal">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <img
              src={selectedStudent?.profilePhoto}
              alt={`${selectedStudent?.name?.preferredName}'s profile`}
              className="student-image"
            />
          </Col>
          <Card className="modal-status-title">
              <Card.Title>Status:</Card.Title>
              <ListGroup
                className={trackStatus === "On Track" ? "on-track" : "off-track"}
              >
                {onTrack()}
              </ListGroup>
            </Card>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Card className="modal-codewars">
              <Card.Title>CodeWars:</Card.Title>
              <ListGroup>
                <ListGroup.Item className="modal-current">
                  Current Total: {selectedStudent.codewars.current.total}
                </ListGroup.Item>
                <ListGroup.Item className="modal-lastweek">
                  Last Week: {selectedStudent.codewars.current.lastWeek}
                </ListGroup.Item>
                <ListGroup.Item className="modal-goal">
                  Goal: {selectedStudent.codewars.goal.total}
                </ListGroup.Item>
                <ListGroup.Item className="modal-percent">
                  Percent of Goal Achieved:{" "}
                  {(
                    (selectedStudent.codewars.current.total /
                      selectedStudent.codewars.goal.total) *
                    100
                  ).toFixed(0)}
                  %
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="modal-score">
              <Card.Title>Scores:</Card.Title>
              <ListGroup>
                <ListGroup.Item className="modal-assignments">
                  Assignments: {selectedStudent.cohort.scores.assignments * 100}%
                </ListGroup.Item>
                <ListGroup.Item className="modal-projects">
                  Projects: {selectedStudent.cohort.scores.projects * 100}%
                </ListGroup.Item>
                <ListGroup.Item className="modal-assessments">
                  Assessments: {selectedStudent.cohort.scores.assessments * 100}%
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="modal-certifications">
              <Card.Title>Certifications:</Card.Title>
              <ListGroup>
                <ListGroup.Item className="modal-resume">
                  Resume: {selectedStudent.certifications.resume ? "✅" : "❌"}
                </ListGroup.Item>
                <ListGroup.Item className="modal-linkedin">
                  LinkedIn: {selectedStudent.certifications.linkedin ? "✅" : "❌"}
                </ListGroup.Item>
                <ListGroup.Item className="modal-mockInterview">
                  Mock Interview: {selectedStudent.certifications.mockInterview ? "✅" : "❌"}
                </ListGroup.Item>
                <ListGroup.Item className="modal-github">
                  Git Hub: {selectedStudent.certifications.github ? "✅" : "❌"}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
      </Modal>
)}
</div>
    </div>
  );
}
