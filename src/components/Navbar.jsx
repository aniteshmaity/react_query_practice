import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

 const { logout,token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className=" shadow-md">
      <div className="container mx-auto max-w-[1440px] px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <h1>Rovara</h1>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            showMenu ? "block" : "hidden"
          } lg:flex lg:space-x-8 space-y-4 lg:space-y-0 text-gray-700`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 text-white lg:space-x-6">
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Contact
              </a>
            </li>
  {!token ? (
              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
