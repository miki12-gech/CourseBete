import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 

  
  const isLoggedIn = !!localStorage.getItem('token');
  const role = localStorage.getItem('userRole'); 

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-blue-600">
                <GraduationCap size={32} />
                <span>CourseBete</span>
            </Link>
          </div>

    
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition">About</Link>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link 
                  to={role === 'admin' ? '/admin' : '/dashboard'} 
                  className="flex items-center gap-1 text-blue-600 font-bold hover:text-blue-800"
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 flex items-center gap-2 transition"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-gray-600 hover:text-blue-600 font-bold">Login</Link>
                <Link to="/register" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-bold shadow-md transition transform hover:-translate-y-0.5">
                  Get Started
                </Link>
              </div>
            )}
          </div>

     
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg animate-fade-in">
          <Link to="/" className="block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          {isLoggedIn ? (
            <>
                <Link to={role === 'admin' ? '/admin' : '/dashboard'} className="block font-bold text-blue-600" onClick={() => setIsOpen(false)}>Dashboard</Link>
                <button onClick={handleLogout} className="block w-full text-left text-red-500 font-bold">Sign Out</button>
            </>
          ) : (
            <>
                <Link to="/login" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/register" className="block bg-blue-600 text-white text-center py-2 rounded font-bold" onClick={() => setIsOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;