import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaClock, FaUserGraduate, FaInfoCircle, FaChevronDown, FaBook } from 'react-icons/fa';

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
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function CourseCard({ course, index }: { course: any, index: number }) {
  const [isCurriculumExpanded, setIsCurriculumExpanded] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  return (
    <motion.div 
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
      <div className="bg-gradient-to-r from-gold-600/20 to-transparent p-8 border-b border-white/5 relative shrink-0">
        <h2 className="text-2xl font-serif font-bold text-white mb-2 relative z-10">{course.title}</h2>
        <div className="absolute top-0 right-0 p-4 text-7xl text-white/5 group-hover:scale-110 transition-transform duration-500">
          ♞
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <p className="text-gray-400 mb-8">{course.description}</p>
        
        <motion.ul className="space-y-4 mb-8">
          <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-sm text-gray-300">
            <FaClock className="text-gold-500 shrink-0" />
            <span className="font-medium text-white w-24 shrink-0">Duration:</span>
            {course.duration}
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-sm text-gray-300">
            <FaUserGraduate className="text-gold-500 shrink-0" />
            <span className="font-medium text-white w-24 shrink-0">Age Group:</span>
            {course.ageGroup}
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-sm text-gray-300">
            <FaInfoCircle className="text-gold-500 shrink-0" />
            <span className="font-medium text-white w-24 shrink-0">Fees:</span>
            {course.fees}
          </motion.li>
        </motion.ul>

        {course.chapters && course.chapters.length > 0 && (
          <div className="mt-auto mb-6">
            <button 
              onClick={() => setIsCurriculumExpanded(!isCurriculumExpanded)}
              className="flex items-center justify-between w-full p-4 bg-dark-900/50 border border-white/10 rounded-lg hover:border-gold-500/50 hover:bg-gold-500/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <FaBook className="text-gold-500" />
                <span className="font-medium text-white">View all the Sub-topics</span>
              </div>
              <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${isCurriculumExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isCurriculumExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-2">
                    {course.chapters.map((chapter: any, chapIndex: number) => (
                      <div key={chapIndex} className="bg-dark-800 rounded border border-white/5 overflow-hidden">
                        <button 
                          onClick={() => setExpandedChapter(expandedChapter === chapIndex ? null : chapIndex)}
                          className="w-full p-3 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                        >
                          <span className="text-sm font-medium text-gold-400">{chapter.title}</span>
                          <FaChevronDown className={`text-xs text-gray-500 transition-transform ${expandedChapter === chapIndex ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {expandedChapter === chapIndex && (
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="pb-3 px-3 space-y-1">
                                {chapter.topics.map((topic: string, topIndex: number) => (
                                  <li key={topIndex} className="text-xs text-gray-400 pl-4 relative before:content-[''] before:absolute before:left-1.5 before:top-1.5 before:w-1 before:h-1 before:bg-gold-500/50 before:rounded-full">
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        
        <Link to="/contact" className={`btn-secondary w-full text-sm ${(!course.chapters || course.chapters.length === 0) ? 'mt-auto' : ''}`}>
          Enquire Now
        </Link>
      </div>
    </motion.div>
  );
}
