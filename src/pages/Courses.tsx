import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaClock, FaUserGraduate, FaChevronDown, FaBook, FaChessPawn, FaChessKnight, FaChessBishop, FaChessRook, FaChessQueen, FaChessKing } from 'react-icons/fa';

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
      case 'foundation': return <FaChessPawn />;
      case 'beginner': return <FaChessKnight />;
      case 'intermediate': return <FaChessBishop />;
      case 'advanced': return <FaChessRook />;
      case 'master': return <FaChessQueen />;
      case 'champion': return <FaChessKing />;
      default: return <FaChessKing />;
    }
  };


  return (
    <PageTransition>
      <SEO 
        title="Chess Courses | Beginner to Master | Coimbatore" 
        description="Explore our highly structured chess programs for all levels. From Foundation to Champion, master the game with Checkmate Chess Academy in Coimbatore."
        schema={courseSchema}
        path="/courses"
      />
      
      <section className="pt-12 pb-8 bg-dark-800/30 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <p className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-2">Our Programs</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Your Chess Journey</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            From your first move to tournament mastery.
          </p>
          
          {/* Tabs Navigation */}
          <div 
            className="flex overflow-x-auto pb-4 px-4 -mx-4 md:pb-0 md:mx-0 md:px-0 md:flex-wrap md:justify-center items-center gap-2 md:gap-3 mb-8 snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' as any }}
          >
            {/* Inject minimal style for hiding scrollbar in webkit */}
            <style dangerouslySetInnerHTML={{__html: `
              .flex.overflow-x-auto::-webkit-scrollbar { display: none; }
            `}} />
            {siteConfig.courses.map((course, index) => {
              const isActive = activeCourseId === course.id;
              return (
                <React.Fragment key={course.id}>
                  <button
                    onClick={() => setActiveCourseId(course.id)}
                    className={`snap-center shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105 font-bold border border-gold-400' 
                        : 'bg-dark-800 text-gray-500 hover:text-gray-300 hover:bg-dark-700 border border-transparent hover:border-white/5 font-medium'
                    }`}
                  >
                    {getIconForCourse(course.id)}
                    {course.title}
                  </button>
                  {index < siteConfig.courses.length - 1 && (
                    <div className="hidden md:block text-gray-500/50 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  )}
                </React.Fragment>
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Image & Meta */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-900 group min-h-[250px] md:min-h-[350px] flex flex-col justify-end">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-950 z-0" />
                  
                  {/* Giant Clip Art Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-all duration-700 z-10 overflow-hidden">
                    <motion.div 
                      key={`giant-${activeCourse.id}`}
                      initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="text-[10rem] md:text-[14rem] text-gold-500 drop-shadow-[0_0_50px_rgba(212,175,55,0.6)] animate-float"
                    >
                      {getIconForCourse(activeCourse.id)}
                    </motion.div>
                  </div>

                  {/* Fade to text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent z-20" />
                  
                  {/* Icon floating subtly */}
                  <div className="absolute top-6 right-6 z-20 text-3xl md:text-4xl text-gold-500/80 drop-shadow-md">
                    {getIconForCourse(activeCourse.id)}
                  </div>
                  
                  <div className="relative p-6 md:p-8 z-30">
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">{activeCourse.title}</h2>
                    <p className="text-gray-300 text-sm">{activeCourse.description}</p>
                  </div>
                </div>

                {/* Course Meta Info */}
                <div className="glass-card p-5 border border-white/5 bg-dark-800/50 rounded-xl flex justify-around items-center">
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
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Curriculum</h2>
                    <p className="text-sm text-gray-400 mt-1">View all the topics</p>
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
                  <ChapterList chapters={activeCourse.chapters} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}

function ChapterList({ chapters }: { chapters: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {chapters.map((chapter, index) => (
        <ChapterAccordion 
          key={index} 
          chapter={chapter} 
          index={index} 
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function ChapterAccordion({ chapter, index, isOpen, onToggle }: { chapter: any, index: number, isOpen: boolean, onToggle: () => void }) {
  // Extract chapter number from title (e.g., "01 Introduction" -> "01", "Introduction")
  const match = chapter.title.match(/^(\d+)\s*(.*)/);
  const chapterNumber = match ? match[1] : (index + 1).toString().padStart(2, '0');
  const chapterTitle = match ? match[2] : chapter.title;

  return (
    <div className="border border-white/5 rounded-xl bg-dark-900 overflow-hidden shadow-sm transition-all duration-300 hover:border-gold-500/30">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 md:p-4 text-left bg-dark-800/50 hover:bg-dark-800 transition-colors"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 rounded bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center font-bold text-white shadow-inner text-sm">
            {chapterNumber}
          </div>
          <span className="text-base md:text-lg font-serif font-semibold text-white group-hover:text-gold-400 transition-colors">
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
            <ul className="p-4 md:pl-14 space-y-2">
              {chapter.topics.map((topic: string, topIndex: number) => (
                <li key={topIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500/70 shrink-0" />
                  <span className="leading-relaxed font-light">{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
