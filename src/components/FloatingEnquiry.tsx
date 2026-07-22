import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingEnquiry: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] transition-all duration-300"
      aria-label="Enquire on WhatsApp"
      title="Chat with us on WhatsApp!"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      
      {/* Ping animation to grab attention */}
      <span className="absolute inset-0 inline-flex w-full h-full rounded-full opacity-40 bg-green-500 animate-ping -z-10"></span>
    </motion.a>
  );
};

export default FloatingEnquiry;
