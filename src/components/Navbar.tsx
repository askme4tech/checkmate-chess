import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
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
  const [hasHoveredLogo, setHasHoveredLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      {/* Promotional Top Banner */}
      <div className="bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide shadow-sm">
        🏆 Shaping the Champions of Tomorrow. <Link to="/contact" className="underline underline-offset-2 hover:text-white transition-colors ml-2">Claim Your Free Trial Class!</Link>
      </div>
      
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onMouseEnter={() => setHasHoveredLogo(true)}>
            <div className="w-14 h-14 md:w-16 md:h-16 overflow-visible group-hover:scale-110 transition-transform duration-300">
              <img src="/logo-transparent.png" alt="CHECK MATE Logo" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className={`relative text-2xl md:text-4xl font-bold tracking-widest text-gray-900 font-serif [-webkit-text-stroke:1px_currentColor] pb-1 mb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-500 ${hasHoveredLogo ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'}`}>CHECK MATE</h1>
              <p className="text-xs md:text-sm text-gold-500 uppercase tracking-[0.2em] font-sans font-semibold">School of Chess</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => !['About', 'Coaches'].includes(link.name)).map((link) => (
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
            
            {/* Hamburger Dropdown for About & Coaches */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-300 hover:text-gold-400 py-2">
                <FiMenu className="text-lg" />
              </button>
              <div className="absolute top-full right-0 w-40 bg-dark-900 border border-white/10 rounded shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
                <Link to="/about" className="px-4 py-2 text-sm uppercase tracking-wider text-gray-300 hover:text-gold-400 hover:bg-white/5 transition-colors">
                  About
                </Link>
                <Link to="/coaches" className="px-4 py-2 text-sm uppercase tracking-wider text-gray-300 hover:text-gold-400 hover:bg-white/5 transition-colors">
                  Coaches
                </Link>
              </div>
            </div>

            <a href="https://checkmate-1zt6.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider transition-colors duration-300 bg-gold-500/10 text-gold-500 hover:bg-gold-500 hover:text-white px-4 py-2 border border-gold-500/50 rounded-sm ml-2">
              Portal
            </a>
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
              <a href="https://checkmate-1zt6.onrender.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="px-6 py-4 text-sm uppercase tracking-wider transition-colors duration-300 text-gold-500 hover:bg-white/5 hover:text-gold-400 font-semibold border-t border-white/5 mt-2">
                Portal
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
