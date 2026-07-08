import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaDirections } from 'react-icons/fa';

export default function Branches() {
  return (
    <PageTransition>
      <SEO title="Our Branches" description="Find a CHECK MATE School of Chess branch near you." />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Branches</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find an academy near you and start your journey today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {siteConfig.branches.map((branch, index) => (
              <motion.div 
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card flex flex-col md:flex-row overflow-hidden group"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
                  <img src={branch.image} alt={branch.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-8 md:w-3/5 flex flex-col justify-between relative z-20 bg-dark-900/40">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6">{branch.name}</h2>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-white/50 mt-1 shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">{branch.address}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaPhoneAlt className="text-white/50 shrink-0" />
                        <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-300 text-sm hover:text-gold-400">{branch.phone}</a>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaClock className="text-white/50 shrink-0" />
                        <span className="text-gray-300 text-sm">{branch.timings}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={branch.googleMapsUrl} target="_blank" rel="noreferrer" className="btn-primary py-2 px-6 flex items-center gap-2 text-sm flex-1">
                      <FaDirections /> Directions
                    </a>
                    <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="btn-secondary py-2 px-6 flex-1 text-sm text-center">
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
