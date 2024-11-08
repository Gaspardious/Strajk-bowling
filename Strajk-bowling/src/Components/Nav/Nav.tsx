import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className='bg-pink'>
      {/* Menu icon */}
      <motion.img
        src="public/navicon.png"
        alt="menu"
        className=" absolute text-white py-2 py-4 px-4 m-0 cursor-pointer"
        onClick={toggleMenu} // Open the menu when clicked
      />

      {/* Slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 50, damp: 0, duration: 0.1 }}
            className="fixed top-0 left-0 w-full h-full bg-menuBlack text-white z-10 flex justify-center items-center"
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-textpink">
              X
            </button>
            <ul className="flex flex-col items-center space-y-4 p-6">
              <li>
                <Link to="/" className="hover:underline font-title text-6xl text-textpink " onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:underline font-title text-6xl text-textpink" onClick={toggleMenu}>
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/confirmation" className="hover:underline font-title text-6xl text-textpink" onClick={toggleMenu}>
                  Confirmation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
