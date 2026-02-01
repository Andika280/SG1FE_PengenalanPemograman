import { useState, useEffect } from 'react';
import './App.css'; 
import { FaTrash, FaPen, FaCheck, FaUndo } from 'react-icons/fa';
import profileImg from './assets/foto.jpeg';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React Dasar", isCompleted: false },
    { id: 2, text: "Mengerjakan Tugas Study Group", isCompleted: true }
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
    setTodos([...todos, { id: newId, text: inputVal, isCompleted: false }]);
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


  const handleToggleComplete = (id) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    ));
  };


  const sortedTodos = [...todos].sort((a, b) => 
    isAscending ? a.id - b.id : b.id - a.id
  );


  const totalTasks = todos.length;
  const completedTasks = todos.filter(t => t.isCompleted).length;

  return (
    <div className="app-container">
    
      <div className="card profile-section">
        <div className="profile-header">
          <img src={profileImg} className="avatar" alt="Avatar" />
          <div>
            <h2 id="name-display">Andika Rahma</h2>
            <p className="role">Frontend Developer</p>
          </div>
        </div>
        <p className="bio">
          Mengerjakan Tugas Study Group #5: React Hooks & Icons.
        </p>
        <button className="btn btn-secondary" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Switch Mode"}
        </button>
      </div>

    
      <div className="card todo-section">
        <h3>My Tasks</h3>
        
        <p className="counter-text">
           Todolist selesai: <b>{completedTasks}/{totalTasks}</b>
        </p>

        <div className="filter-group">
          <button className="btn btn-secondary" onClick={() => setIsAscending(!isAscending)}>
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
            <li key={todo.id} className={todo.isCompleted ? "completed-item" : ""}>
              <span 
                className={`todo-text ${todo.isCompleted ? "crossed-text" : ""}`}
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.id}. {todo.text}
              </span>
              
              <div className="action-buttons">
              
                <button 
                  className={`btn-icon ${todo.isCompleted ? "btn-undo" : "btn-check"}`} 
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  {todo.isCompleted ? <FaUndo /> : <FaCheck />}
                </button>

                <button className="btn-icon btn-edit" onClick={() => handleEdit(todo.id)}>
                  <FaPen />
                </button>
                
                <button className="btn-icon btn-delete" onClick={() => handleDelete(todo.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;