import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Since Google Photos shared album URL doesn't directly provide a JSON feed of images,
  // we normally would need a backend or a service to scrape/parse it.
  // For a purely static site without a backend, you'd either manually add image URLs here,
  // or use a 3rd party widget (like Elfsight) using the URL provided in config.
  // Here we simulate the masonry gallery. You can replace the placeholders with actual URLs.
  const dummyImages = [
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80",
    "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=800&q=80",
    "https://images.unsplash.com/photo-1610633389174-0f2c41935c10?w=800&q=80",
    "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&q=80",
    "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&q=80",
    "https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=800&q=80"
  ];

  return (
    <PageTransition>
      <SEO title="Gallery" description="View images from our classes, tournaments, and events." />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Moments from our classes, tournaments, and events.
          </p>
          {siteConfig.integrations.googlePhotosAlbumUrl !== "#" && (
             <a href={siteConfig.integrations.googlePhotosAlbumUrl} target="_blank" rel="noreferrer" className="text-gold-500 hover:underline text-sm">
               View Full Album on Google Photos
             </a>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {dummyImages.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/5 relative group"
                onClick={() => setSelectedImage(src)}
              >
                <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white bg-dark-900/80 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">View</span>
                </div>
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-dark-900/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white hover:text-gold-500 text-3xl transition-colors"
            >
              <FaTimes />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
