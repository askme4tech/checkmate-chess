import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaClock, FaUserGraduate, FaInfoCircle, FaChevronDown, FaBook, FaChessPawn, FaChessKnight, FaChessBishop, FaChessRook, FaChessQueen, FaChessKing } from 'react-icons/fa';

export default function Courses() {
  const [activeCourseId, setActiveCourseId] = useState(siteConfig.courses[0].id);

  const activeCourse = siteConfig.courses.find(c => c.id === activeCourseId) || siteConfig.courses[0];

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

  const getIconForCourse = (id: string) => {
    switch (id) {
      case 'beginner': return <FaChessPawn />;
      case 'intermediate-1': return <FaChessKnight />;
      case 'intermediate-2': return <FaChessBishop />;
      case 'advanced': return <FaChessRook />;
      case 'professional': return <FaChessQueen />;
      default: return <FaChessKing />;
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Chess Programs & Curriculum" 
        description="Explore our highly structured chess programs for all levels. From Foundation to Champion, master the game with Checkmate Chess Academy."
        schema={courseSchema}
      />
      
      <section className="py-20 bg-dark-800/30 text-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
           <div className="absolute top-[-10%] left-[-5%] text-[30rem] text-white/5 opacity-30 select-none">♜</div>
           <div className="absolute bottom-[-20%] right-[-10%] text-[40rem] text-gold-500/5 opacity-20 select-none">♚</div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Structured learning designed to take you from a beginner to an advanced tournament player.
          </p>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {siteConfig.courses.map((course) => {
              const isActive = activeCourseId === course.id;
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseId(course.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105' 
                      : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-white/10'
                  }`}
                >
                  {getIconForCourse(course.id)}
                  {course.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Details Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourseId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Image & Meta */}
              <div className="lg:col-span-5 space-y-8">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-900 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
                  <img 
                    src="/course_book.png" 
                    alt={`${activeCourse.title} Curriculum`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">{activeCourse.title}</h2>
                    <p className="text-gray-300 text-sm">{activeCourse.description}</p>
                  </div>
                </div>

                {/* Course Meta Info */}
                <div className="glass-card p-6 border border-white/5 bg-dark-800/50 rounded-xl flex justify-around items-center">
                  <div className="text-center">
                    <FaClock className="text-gold-500 text-2xl mx-auto mb-2" />
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Duration</p>
                    <p className="text-white font-medium">{activeCourse.duration}</p>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="text-center">
                    <FaUserGraduate className="text-gold-500 text-2xl mx-auto mb-2" />
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Age Group</p>
                    <p className="text-white font-medium">{activeCourse.ageGroup}</p>
                  </div>
                </div>
                
                <Link to="/contact" className="btn-primary w-full block text-center py-4 text-lg">
                  Enquire Now
                </Link>
              </div>

              {/* Right Column: Curriculum Accordion */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-white">Curriculum</h2>
                    <p className="text-gray-400">View all the Sub-topics</p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-gold-900/30 text-gold-500 text-sm font-medium border border-gold-500/20">
                    {activeCourse.chapters?.length || 0} Chapters
                  </div>
                </div>

                {(!activeCourse.chapters || activeCourse.chapters.length === 0) ? (
                  <div className="p-8 text-center border border-white/5 bg-dark-800/30 rounded-xl">
                    <FaBook className="text-4xl text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl text-gray-300 font-medium mb-2">Curriculum Updating</h3>
                    <p className="text-gray-500">The detailed curriculum for this level is currently being updated. Please check back soon or contact us for details.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activeCourse.chapters.map((chapter, index) => (
                      <ChapterAccordion key={index} chapter={chapter} index={index} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}

function ChapterAccordion({ chapter, index }: { chapter: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract chapter number from title (e.g., "01 Introduction" -> "01", "Introduction")
  const match = chapter.title.match(/^(\d+)\s*(.*)/);
  const chapterNumber = match ? match[1] : (index + 1).toString().padStart(2, '0');
  const chapterTitle = match ? match[2] : chapter.title;

  return (
    <div className="border border-white/5 rounded-xl bg-dark-900 overflow-hidden shadow-lg transition-all duration-300 hover:border-gold-500/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-dark-800/50 hover:bg-dark-800 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center font-bold text-white shadow-inner">
            {chapterNumber}
          </div>
          <span className="text-lg font-medium text-white group-hover:text-gold-400 transition-colors">
            {chapterTitle}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gold-500 hidden md:inline-block">
            {chapter.topics.length} topics
          </span>
          <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-dark-900/50"
          >
            <ul className="p-5 md:pl-[4.5rem] space-y-3">
              {chapter.topics.map((topic: string, topIndex: number) => (
                <li key={topIndex} className="flex items-start gap-3 text-gray-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
