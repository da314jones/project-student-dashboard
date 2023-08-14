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
    <div className="student-grid">
      {Object.keys(cohortGroups).map((cohort, index) => (
        <div key={index}>
          <h3>{cohort}</h3>
          <div className="cohort-students">
            {cohortGroups[cohort].map((student, studentIndex) => (
              <div
                key={studentIndex}
                className={`student-card ${
                  selectedStudent && student.id === selectedStudent.id
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
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedStudent && (
        <Modal show={selectedStudent !== null} onHide={handleClose}>
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
                <Col xs={12} md={4}>
                  <Card className="gridView-studentDetails">
                    <Card.Title>CodeWars:</Card.Title>
                    <ListGroup>
                      <ListGroup.Item>
                        Current Total: {selectedStudent.codewars.current.total}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Last Week: {selectedStudent.codewars.current.lastWeek}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Goal: {selectedStudent.codewars.goal.total}
                      </ListGroup.Item>
                      <ListGroup.Item>
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
                  <Card>
                    <Card.Title>Scores:</Card.Title>
                    <ListGroup>
                      <ListGroup.Item>
                        Assignments:{" "}
                        {selectedStudent.cohort.scores.assignments * 100}%
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Projects: {selectedStudent.cohort.scores.projects * 100}
                        %
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Assessments:{" "}
                        {selectedStudent.cohort.scores.assessments * 100}%
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                  <Card>
                    <Card.Title>Certifications:</Card.Title>
                    <ListGroup>
                      <ListGroup.Item>
                        Resume:{" "}
                        {selectedStudent.certifications.resume ? "✅" : "❌"}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        LinkedIn:{" "}
                        {selectedStudent.certifications.linkedin ? "✅" : "❌"}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Mock Interview:{" "}
                        {selectedStudent.certifications.mockInterview
                          ? "✅"
                          : "❌"}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Git Hub:{" "}
                        {selectedStudent.certifications.github ? "✅" : "❌"}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Card.Title>Status:</Card.Title>
            <ListGroup
              className={trackStatus === "On Track" ? "on-track" : "off-track"}
            >
              {onTrack()}
            </ListGroup>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
