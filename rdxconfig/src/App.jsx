import "./App.css";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import MainRoutes from "./Pages/MainRoutes";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
      <h1>React Redux Configuration</h1>
      <Navbar />
      <hr />
      <MainRoutes />
    </>
  );
}

export default App;
