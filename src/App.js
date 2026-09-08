import "./App.css";
import Navbar from "./components/Navbar";
import TodoPage from "./pages/TodoPage";
function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <TodoPage />
      </main>
    </div>
  );
}

export default App;
