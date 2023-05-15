import "./App.css";
import HeaderTodo from "./components/header";
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <div className="containerTodo">
        <div className="todo-container">
          <HeaderTodo />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
