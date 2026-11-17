import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-agri-gold font-bold text-sm uppercase tracking-widest mb-2">404 Error</span>
      <h1 className="text-4xl sm:text-5xl font-black text-agri-dark font-heading mb-4">Page Not Found</h1>
      <p className="text-gray-600 max-w-md mb-8 text-sm sm:text-base">
        The harvest page or product you are looking for does not exist or may have been relocated.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full bg-agri-forest text-white font-bold text-xs uppercase tracking-wider hover:bg-agri-primary transition-all shadow-md"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
