import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent the click from closing the menu immediately
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className='bg-[#222831] text-white flex justify-between items-center p-4 py-8 shadow-lg'>
      <ul className='flex flex-wrap space-x-7 text-xl cursor-pointer'>
        <li className='pl-4 text-xl sm:text-2xl font-semibold cursor-default'>Nishreyta Lamsal</li>
        <div className='hidden lg:flex space-x-7'>
          <a href="#profile">
            <li className='ml-80'>Profile</li>
          </a>
          <a href="#aboutme">
            <li>About Me</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </div>
      </ul>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
        <button className="lg:hidden text-white ml-4" id="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>

      {/* Mobile menu container */}
      <div
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        className={`fixed top-0 left-0 h-full w-64 bg-[#393E46] transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          <a href="#profile" className="text-lg">Profile</a>
          <a href="#aboutme" className="text-lg">About Me</a>
          <a href="#projects" className="text-lg">Projects</a>
          <a href="#contact" className="text-lg">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

