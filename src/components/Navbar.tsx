import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChessKnight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Branches', path: '/branches' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded shadow-lg group-hover:scale-105 transition-transform duration-300 border border-gold-500/30">
              <img src="/logo.jpeg" alt="CHECK MATE Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white font-serif">CHECK MATE</h1>
              <p className="text-[10px] text-gold-400 uppercase tracking-widest -mt-1 font-sans">School of Chess</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm uppercase tracking-wider transition-colors duration-300 hover:text-gold-400 ${isActive ? 'text-gold-500 font-semibold' : 'text-gray-300'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-2xl text-gold-500 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass shadow-2xl border-t border-white/10 md:hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-gold-500 bg-white/5' : 'text-gray-300 hover:bg-white/5 hover:text-gold-400'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
