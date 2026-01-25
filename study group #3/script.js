import { useState, useEffect } from 'react';
import './App.css'; 
import profileImg from './assets/profile.webp'; // Sesuaikan path gambar kamu

function App() {
  // --- STATE MANAGEMENT ---
  const [todos, setTodos] = useState([
    { id: 1, text: "Aku belajar javascript" },
    { id: 2, text: "Aku sudah makan" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- EFFECT: DARK MODE ---
  // Kita inject class ke body agar variable CSS global berubah
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // --- HANDLERS ---

  // 1. Add Todo
  const handleAddTodo = () => {
    if (inputVal.trim() === "") return;

    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    const newTodo = { id: newId, text: inputVal };

    setTodos([...todos, newTodo]);
    setInputVal(""); // Reset input
  };

  // 2. Delete Todo (Sesuai Tugas Wajib)
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // 3. Update Todo (Sesuai Tugas Opsional)
  const handleEditTodo = (id) => {
    const todoToEdit = todos.find(t => t.id === id);
    const newText = prompt("Update tugas:", todoToEdit.text);
    
    if (newText && newText.trim() !== "") {
      setTodos(todos.map(t => 
        t.id === id ? { ...t, text: newText } : t
      ));
    }
  };

  // 4. Sort Toggle
  const handleSort = () => {
    setIsAscending(!isAscending);
  };

  // --- DERIVED STATE (SORTING) ---
  // Kita urutkan copy dari array agar tidak memutasi state langsung
  const sortedTodos = [...todos].sort((a, b) => {
    return isAscending ? a.id - b.id : b.id - a.id;
  });

  return (
    <div className="app-container">
      {/* KARTU KIRI: PROFIL */}
      <div className="card profile-section">
        <div className="profile-header">
          <img src={profileImg} alt="Avatar" className="avatar" />
          <div>
            <h2 id="name-display">Nama Saya</h2>
            <p className="role">Frontend Developer</p>
          </div>
        </div>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
          facilis perspiciatis porro?
        </p>

        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="btn btn-secondary"
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* KARTU KANAN: TODO LIST */}
      <div className="card todo-section">
        <h3>My Tasks</h3>

        <div className="filter-group">
          <button onClick={handleSort} className="btn btn-secondary">
            Sort: {isAscending ? "Ascending (ID)" : "Descending (ID)"}
          </button>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Tulis tugas baru..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button onClick={handleAddTodo} className="btn btn-primary">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {sortedTodos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.id}. {todo.text}</span>
              
              <div className="action-buttons">
                {/* Tombol Update (Opsional) */}
                <button 
                  className="btn-edit" 
                  onClick={() => handleEditTodo(todo.id)}
                >
                  Edit
                </button>
                
                {/* Tombol Delete (Wajib) */}
                <button 
                  className="btn-delete" 
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          {sortedTodos.length === 0 && <p style={{textAlign: 'center', color: '#888'}}>Tidak ada tugas.</p>}
        </ul>
      </div>
    </div>
  );
}

export default App;