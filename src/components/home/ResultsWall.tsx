import { motion } from 'framer-motion';

export default function ResultsWall() {
  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Proven Results</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just teach chess. We create players. Our students consistently perform at the highest levels.
          </p>
        </motion.div>

        {/* Masonry-style Grid for Results & Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          
          {/* Stat Block 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-dark-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-white/5 hover:border-gold-500/30 transition-colors"
          >
            <span className="text-6xl mb-4">🏆</span>
            <h3 className="text-4xl font-black text-white mb-2">150+</h3>
            <p className="text-gold-500 font-medium uppercase tracking-wider">Tournament Wins</p>
          </motion.div>

          {/* Image Block 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 rounded-2xl overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" alt="Students competing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-2xl font-bold text-white">District Championships 2024</h4>
            </div>
          </motion.div>

          {/* Image Block 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 rounded-2xl overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80" alt="Medal winner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-xl font-bold text-white">State Level Finalists</h4>
            </div>
          </motion.div>

          {/* Stat Block 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-dark-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-white/5 hover:border-gold-500/30 transition-colors"
          >
            <span className="text-6xl mb-4">🥇</span>
            <h3 className="text-4xl font-black text-white mb-2">50+</h3>
            <p className="text-gold-500 font-medium uppercase tracking-wider">Champions Produced</p>
          </motion.div>

          {/* Stat Block 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-dark-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-white/5 hover:border-gold-500/30 transition-colors"
          >
            <span className="text-6xl mb-4">♟️</span>
            <h3 className="text-4xl font-black text-white mb-2">75+</h3>
            <p className="text-gold-500 font-medium uppercase tracking-wider">FIDE Rated Players</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
