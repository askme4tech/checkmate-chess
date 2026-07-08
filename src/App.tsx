import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Coaches = lazy(() => import('./pages/Coaches'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Videos = lazy(() => import('./pages/Videos'));
const Branches = lazy(() => import('./pages/Branches'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple loading spinner
const LoadingScreen = () => (
  <div className="flex-1 flex items-center justify-center min-h-screen bg-dark-900">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold-500"></div>
  </div>
);

function App() {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="coaches" element={<Coaches />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="videos" element={<Videos />} />
            <Route path="branches" element={<Branches />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
