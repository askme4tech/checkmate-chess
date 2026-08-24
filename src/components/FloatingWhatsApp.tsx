import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../config/site';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello! I'd like to know more about the chess classes.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-[fadeInUp_1s_ease-out_forwards] opacity-0"
      aria-label="Chat on WhatsApp"
      style={{ animationDelay: '1s' }}
    >
      <FaWhatsapp className="text-2xl" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
        Chat with us!
      </span>
    </a>
  );
}
