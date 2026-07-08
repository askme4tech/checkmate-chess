import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition className="min-h-[80vh] flex items-center justify-center">
      <SEO title="404 - Page Not Found" />
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gold-500 mb-4">404</h1>
        <h2 className="text-3xl font-serif text-white mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary">
          Back to Homepage
        </Link>
      </div>
    </PageTransition>
  );
}
