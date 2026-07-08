import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <PageTransition>
      <SEO title="Contact Us" description="Get in touch with CHECK MATE School of Chess for admissions and inquiries." />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your chess journey? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8 relative inline-block">
                  Contact Information
                  <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold-600 rounded-full"></span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-gold-500 text-xl shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">Head Office</h3>
                      <p className="text-gray-400 leading-relaxed whitespace-pre-line">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-gold-500 text-xl shrink-0">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">Phone</h3>
                      <div className="flex flex-col gap-2">
                        {siteConfig.contact.phones.map(phone => (
                          <a key={phone} href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-gray-400 hover:text-gold-400 transition-colors">{phone}</a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-gold-500 text-xl shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-gold-400 transition-colors">{siteConfig.contact.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
                  <FaWhatsapp className="text-xl" /> WhatsApp Us
                </a>
                <a href={siteConfig.branches[0]?.googleMapsUrl || '#'} target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
                  <FaMapMarkerAlt /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Google Form Embed */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-2 rounded-2xl overflow-hidden h-[600px] relative"
            >
              {siteConfig.integrations.googleFormEmbedUrl !== "#" ? (
                <iframe 
                  src={siteConfig.integrations.googleFormEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="bg-white rounded-xl"
                  title="Enquiry Form"
                >
                  Loading…
                </iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-xl text-gray-400 text-center p-8">
                  Please add your Google Form embed URL to the configuration file to display the enquiry form here.
                </div>
              )}
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
