import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <h1>Task Manager</h1>
        <p>Manage your daily tasks in one place.</p>
      </main>
    </div>
  );
}

export default App;
