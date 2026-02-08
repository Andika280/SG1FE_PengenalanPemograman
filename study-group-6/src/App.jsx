import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Todo from './Todo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;