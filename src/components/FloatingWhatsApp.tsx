import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../config/site';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello! I'd like to know more about the chess classes.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
        Chat with us!
      </span>
    </a>
  );
}
