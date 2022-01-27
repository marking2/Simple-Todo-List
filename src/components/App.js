import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList items = {
        [
          {
            text: "Task 1",
            completed: false,
          },
          {
            text: "Task 2",
            completed: true,
          },
          {
            text: "Task 3",
            completed: false,
          },
          {
            text: "Task 4",
            completed: true,
          },
        ]
      }/>
    </div>
  );
}

export default App;
