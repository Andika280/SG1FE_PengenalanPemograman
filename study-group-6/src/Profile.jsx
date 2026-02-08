import { Link } from 'react-router-dom';
import profileImg from './assets/foto.jpeg'; 

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl overflow-hidden p-6 text-center">
        
        <div className="flex justify-center mb-4">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800">Andika</h2>
        <p className="text-blue-500 font-medium mb-4">Frontend Developer</p>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Halo! Saya sedang belajar React Router dan Tailwind CSS di Study Group #6.
        </p>

        <Link to="/todo">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg cursor-pointer">
            Lihat Tugas Saya ➜
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Profile;