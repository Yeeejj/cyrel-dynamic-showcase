import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg bg-[var(--bg-primary)]/90 border-b border-[var(--bg-secondary)]">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <a
            href="/resume.pdf"
            download="CyrelEdano_Resume.pdf"
            className="flex items-center gap-2 bg-[var(--accent)] text-[var(--bg-primary)] px-5 py-2.5 rounded-lg font-semibold hover:opacity-80 transition-opacity"
          >
            <Download size={18} />
            Download PDF
          </a>
        </nav>
      </header>

      {/* Resume Viewer */}
      <div className="pt-20 px-4 pb-8">
        <div
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[var(--accent)]/20 shadow-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(215, 185, 165, 0.3)',
          }}
        >
          <iframe
            src="/resume.pdf"
            width="100%"
            style={{ border: 'none', height: 'calc(100vh - 120px)' }}
            title="Resume - Cyrel Edaño"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
