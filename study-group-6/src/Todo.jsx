import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaCheck, FaUndo } from 'react-icons/fa';

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: "Contoh Tugas (Hapus Aja)", isCompleted: false }
    ];
  });
  
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!inputVal.trim()) return;
    const newId = Date.now(); 
    setTodos([...todos, { id: newId, text: inputVal, isCompleted: false }]);
    setInputVal("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  const completedCount = todos.filter(t => t.isCompleted).length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      
      <div className="w-full max-w-md mb-6 flex justify-between items-center">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Kembali ke Profil
        </Link>
        <span className="text-gray-500 text-sm font-medium">
          Selesai: {completedCount}/{todos.length}
        </span>
      </div>

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Tasks</h1>

        <div className="flex gap-2 mb-6">
          <input 
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tulis tugas baru..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button 
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold transition cursor-pointer"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.length === 0 && <p className="text-center text-gray-400 italic">Belum ada tugas.</p>}
          
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              className={`flex justify-between items-center p-3 rounded-lg border transition duration-200 ${
                todo.isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100'
              }`}
            >
              <span 
                onClick={() => handleToggle(todo.id)}
                className={`cursor-pointer flex-1 select-none ${
                  todo.isCompleted ? 'line-through text-gray-400 italic' : 'text-gray-700'
                }`}
              >
                {todo.text}
              </span>

              <div className="flex gap-2 ml-3">
                <button 
                  onClick={() => handleToggle(todo.id)}
                  className={`p-2 rounded-md text-white transition ${
                    todo.isCompleted ? 'bg-gray-400 hover:bg-gray-500' : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {todo.isCompleted ? <FaUndo size={12}/> : <FaCheck size={12}/>}
                </button>
                <button 
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
                >
                  <FaTrash size={12}/>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;