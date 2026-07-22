import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaClock, FaUserGraduate, FaInfoCircle } from 'react-icons/fa';

export default function Courses() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": siteConfig.courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": siteConfig.academyName
        }
      }
    }))
  };

  return (
    <PageTransition>
      <SEO 
        title="Chess Courses" 
        description="Explore our chess courses for beginners, intermediate, and advanced players. We offer regular, weekend, and online classes."
        schema={courseSchema}
      />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Courses</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Structured learning programs designed to take you from a beginner to an advanced tournament player.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.courses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.1, duration: 0.5, staggerChildren: 0.15, delayChildren: index * 0.1 + 0.3 } 
                  }
                }}
                className={`glass-card flex flex-col h-full overflow-hidden group border-2 ${index % 2 === 1 ? 'bg-dark-800/80 border-gold-500/20' : 'bg-dark-900/60 border-white/5'}`}
              >
                <div className="bg-gradient-to-r from-gold-600/20 to-transparent p-8 border-b border-white/5 relative">
                  <h2 className="text-2xl font-serif font-bold text-white mb-2 relative z-10">{course.title}</h2>
                  <div className="absolute top-0 right-0 p-4 text-7xl text-white/5 group-hover:scale-110 transition-transform duration-500">
                    ♞
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-400 mb-8 flex-grow">{course.description}</p>
                  
                  <motion.ul className="space-y-4 mb-8">
                    <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-sm text-gray-300">
                      <FaClock className="text-gold-500" />
                      <span className="font-medium text-white w-24">Duration:</span>
                      {course.duration}
                    </motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-sm text-gray-300">
                      <FaUserGraduate className="text-gold-500" />
                      <span className="font-medium text-white w-24">Age Group:</span>
                      {course.ageGroup}
                    </motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-sm text-gray-300">
                      <FaInfoCircle className="text-gold-500" />
                      <span className="font-medium text-white w-24">Fees:</span>
                      {course.fees}
                    </motion.li>
                  </motion.ul>
                  
                  <Link to="/contact" className="btn-secondary w-full text-sm">
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
