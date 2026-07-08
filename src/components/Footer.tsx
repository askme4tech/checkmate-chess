import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 overflow-hidden rounded shadow-lg border border-gold-500/30">
                <img src="/logo.jpeg" alt="CHECK MATE Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wider text-white">CHECK MATE</h2>
                <p className="text-xs text-gold-400 uppercase tracking-widest font-sans">School of Chess</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering minds through the royal game. We build discipline, memory, and strategic thinking in students of all ages.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500/50 transition-all">
                <FaFacebookF />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500/50 transition-all">
                <FaInstagram />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500/50 transition-all">
                <FaYoutube />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500/50 transition-all">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-3">
              {['About', 'Courses', 'Coaches', 'Gallery', 'Videos', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2">
                    <span className="text-gold-500 text-xs">▹</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 relative inline-block">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-3">
              {siteConfig.courses.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <Link to="/courses" className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2">
                    <span className="text-gold-500 text-xs">▹</span> {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold-500 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gold-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  {siteConfig.contact.phones.map(phone => (
                    <a key={phone} href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-gray-400 hover:text-gold-400 transition-colors text-sm">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold-500 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-gold-400 transition-colors text-sm">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} {siteConfig.academyName}. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/faq" className="text-gray-500 hover:text-gold-400 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-gray-500 hover:text-gold-400 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
