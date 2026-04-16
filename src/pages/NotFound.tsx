import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-[var(--accent)] font-cormorant">404</h1>
        <p className="text-lg text-[var(--text-secondary)] mb-6">Page not found</p>
        <Link
          to="/"
          className="inline-block bg-[var(--accent)] text-[var(--bg-primary)] px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
