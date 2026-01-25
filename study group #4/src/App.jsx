import { useState, useEffect } from 'react';
import './App.css'; 
import profileImg from './assets/profile.webp';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Aku belajar javascript" },
    { id: 2, text: "Aku sudah makan" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [isDarkMode]);

  const handleAdd = () => {
    if (!inputVal.trim()) return;
    const newId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: inputVal }]);
    setInputVal("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleEdit = (id) => {
    const item = todos.find(t => t.id === id);
    const textBaru = prompt("Update tugas:", item.text);
    if (textBaru) {
      setTodos(todos.map(t => t.id === id ? { ...t, text: textBaru } : t));
    }
  };

  const sortedTodos = [...todos].sort((a, b) => 
    isAscending ? a.id - b.id : b.id - a.id
  );

  return (
    <div className="app-container">
      <div className="card profile-section">
        <div className="profile-header">
          <img src={profileImg} className="avatar" alt="Avatar" />
          <div>
            <h2 id="name-display">Nama Saya</h2>
            <p className="role">Frontend Developer</p>
          </div>
        </div>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Dolorem voluptates eius nisi iusto error.
        </p>
        <button className="btn btn-secondary" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Switch Mode"}
        </button>
      </div>

      <div className="card todo-section">
        <h3>My Tasks</h3>
        <div className="filter-group">
          <button className="btn btn-secondary" style={{marginBottom: '10px'}} onClick={() => setIsAscending(!isAscending)}>
            Sort: {isAscending ? "Ascending (ID)" : "Descending (ID)"}
          </button>
        </div>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Tulis tugas baru..." 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAdd}>Add</button>
        </div>

        <ul className="todo-list">
          {sortedTodos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.id}. {todo.text}</span>
              <div className="action-buttons">
                <button className="btn-edit" onClick={() => handleEdit(todo.id)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;