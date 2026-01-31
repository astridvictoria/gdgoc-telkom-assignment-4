import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={input}
        placeholder="Masukkan kegiatan"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Tambah</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
