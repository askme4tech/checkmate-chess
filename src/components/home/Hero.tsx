import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChessKnight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-dark-900">
      {/* Background Media Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80"
          alt="Child thinking at chessboard"
          className="w-full h-full object-cover grayscale-[50%] mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent"></div>
      </motion.div>

      {/* Subtle Background Elements */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 0.05 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-10 top-1/4 z-0 pointer-events-none"
      >
        <FaChessKnight className="text-[20rem] text-white" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Think. Play. <span className="text-gold-500">Master.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-300 font-light mb-4"
          >
            Where young minds learn to think ahead.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            At Check Mate School of Chess, we help children build chess skills, confidence, concentration, and strategic thinking through structured coaching and real competitive experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-dark-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/30"
            >
              Book a Free Trial
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white border-2 border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
            >
              Explore Our Programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
