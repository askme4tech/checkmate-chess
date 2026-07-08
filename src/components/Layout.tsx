import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
