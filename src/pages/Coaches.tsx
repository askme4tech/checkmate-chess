import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaUserCircle } from 'react-icons/fa';

export default function Coaches() {
  // Placeholder data for coaches, can be moved to siteConfig later if needed
  const coaches = [
    {
      id: 1,
      name: "Grandmaster Placeholder",
      title: "Head Coach",
      bio: "An International Grandmaster with over 15 years of coaching experience. Specializes in advanced tournament preparation and psychological training.",
      rating: "2500+",
      image: null
    },
    {
      id: 2,
      name: "FIDE Master Placeholder",
      title: "Senior Coach",
      bio: "A highly tactical player focusing on intermediate to advanced students. Has produced multiple state and national level champions.",
      rating: "2300+",
      image: null
    },
    {
      id: 3,
      name: "Expert Placeholder",
      title: "Beginner Specialist",
      bio: "Passionate about introducing chess to young minds. Uses interactive and fun methods to teach the fundamentals of the game.",
      rating: "2000+",
      image: null
    }
  ];

  return (
    <PageTransition>
      <SEO title="Our Coaches" description="Meet the expert coaches at CHECK MATE School of Chess." />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Coaches</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from experienced titled players and professional chess trainers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div 
                key={coach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 text-center border-2 ${index % 2 === 1 ? 'bg-dark-900/60 border-white/5' : 'bg-dark-800/80 border-gold-500/20'}`}
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-dark-900 border-4 border-gold-500/30 flex items-center justify-center overflow-hidden mb-6">
                  {coach.image ? (
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                  ) : (
                    <FaUserCircle className="text-7xl text-gray-600" />
                  )}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-1">{coach.name}</h3>
                <p className="text-gold-500 text-sm tracking-wider uppercase mb-2">{coach.title}</p>
                <p className="text-xs text-gray-400 bg-white/5 inline-block px-3 py-1 rounded-full mb-6">Peak Rating: {coach.rating}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{coach.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
