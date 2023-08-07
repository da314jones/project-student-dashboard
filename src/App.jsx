import data from "./data/data.json"


function App() {
  console.log(data)
  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
      {data.map((student) => (
          <li key={student.id}>{student.names.preferredName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
