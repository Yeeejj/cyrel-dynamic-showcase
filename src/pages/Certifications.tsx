import { useState } from 'react';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

interface CertificationProps {
  title: string;
  issuer: string;
  credlyUrl: string;
}

const CertificationCard = ({ title, issuer, credlyUrl }: CertificationProps) => {
  return (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-[var(--accent)]/20">
      <div className="flex items-start justify-between mb-4">
        <Award className="text-[var(--accent)] w-8 h-8 flex-shrink-0" />
        <a
          href={credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors"
          title="View Credential"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-cormorant">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-4">
        Issued by {issuer}
      </p>
      <a
        href={credlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[var(--accent)] text-[var(--bg-primary)] px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition-opacity text-sm"
      >
        View Credential
      </a>
    </div>
  );
};

const Certifications = () => {
  const navigate = useNavigate();

  const certifications = [
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/f06e056c-2d54-4c75-8ff1-4f91633ee8e7/public_url"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      credlyUrl: "https://www.credly.com/badges/d96b470d-1764-4112-9166-c689d50140c1/public_url"
    },
    {
      title: "CyberOps Associate",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/67f4682f-f0a2-42c6-aadc-b1a590184836/public_url"
    },
    {
      title: "Ethical Hacker",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/64c00b8b-52b3-4c5e-b594-b832de4e267c/public_url"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/c538fd8b-a8e0-491a-82c5-635d324ffba6/public_url"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/d340ad97-e2b4-436e-ba55-509c4a6b82c9/public_url"
    },
    {
      title: "Operating Systems Basics",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/a32739f3-6eb1-45dd-b639-b1ec0fc04d1d/public_url"
    },
    {
      title: "Google UX Design Professional",
      issuer: "Coursera",
      credlyUrl: "https://www.coursera.org/account/accomplishments/verify/X8UJVKP9NF54?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg bg-[var(--bg-primary)]/90 border-b border-[var(--bg-secondary)]">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-2xl font-bold font-tajawal">CYREL EDAÑO</span>
          </button>
          <ThemeToggle />
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--text-primary)] font-cormorant">
              Professional Certifications
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of industry-recognized certifications spanning cybersecurity, 
              artificial intelligence, data science, and user experience design.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 inline-block">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] font-cormorant">
                    {certifications.length}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">
                    Total Certifications
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] font-cormorant">
                    4
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">
                    Technology Areas
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] font-cormorant">
                    3
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">
                    Leading Providers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;