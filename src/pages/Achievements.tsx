import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaTrophy, FaMedal } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      year: "2023",
      title: "State Championship Under-13",
      description: "Our student secured 1st place in the Tamil Nadu State Under-13 Chess Championship.",
      icon: <FaTrophy />
    },
    {
      year: "2022",
      title: "National Amateur Chess",
      description: "Three of our academy players finished in the top 10 of the National Amateur category.",
      icon: <FaMedal />
    },
    {
      year: "2021",
      title: "FIDE Ratings Achievement",
      description: "Over 20 students achieved their initial FIDE international ratings in a single calendar year.",
      icon: <FaMedal />
    }
  ];

  return (
    <PageTransition>
      <SEO title="Student Achievements" description="Discover the tournament wins and rating improvements of CHECK MATE School of Chess students." />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Achievements</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Celebrating the hard work, dedication, and victories of our students.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-white/5 hidden md:block rounded-full"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -ml-6 w-12 h-12 rounded-full bg-dark-900 border-4 border-gold-500 hidden md:flex items-center justify-center text-gold-500 z-10">
                  {achievement.icon}
                </div>

                <div className="w-full md:w-5/12">
                  <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">{achievement.year}</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-400 italic">More achievements and rating milestones are added regularly.</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
