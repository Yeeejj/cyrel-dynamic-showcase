import { useState } from 'react';
import { Link } from 'react-router-dom';
import WelcomeScreen from '@/components/WelcomeScreen';
import TypewriterEffect from '@/components/TypewriterEffect';
import ThemeToggle from '@/components/ThemeToggle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import InterestBubble from '@/components/InterestBubble';
import { Github, Linkedin, Mail, Facebook, MessageCircle, Send, Award, ExternalLink, FileText, Menu, X } from 'lucide-react';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedServiceIndex, setExpandedServiceIndex] = useState<number | null>(null);

  const services = [
    {
      title: "AI, Machine Learning & Data Science",
      description: "Building intelligent systems — from computer vision pipelines to predictive models that turn raw data into decisions.",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Matplotlib", "NumPy", "Pandas", "SciPy", "Jupyter", "YOLO", "NLP"]
    },
    {
      title: "Full-Stack & Frontend Engineering",
      description: "Crafting modern, responsive interfaces and full-stack applications with seamless user experiences.",
      skills: ["TypeScript", "JavaScript", "React", "React Native", "Node.js", "Next.js", "Electron.js", "HTML5", "CSS3", "TailwindCSS", "Vite"]
    },
    {
      title: "Backend & Database Engineering",
      description: "Designing robust APIs, server architectures, and database systems that scale reliably.",
      skills: ["Java", "SQL", "PostgreSQL", "MySQL", "MongoDB", "FastAPI", "Express.js", "REST APIs", "GraphQL", "Prisma"]
    },
    {
      title: "Cloud & DevOps Infrastructure",
      description: "Deploying and managing cloud-native systems with automated pipelines and infrastructure as code.",
      skills: ["Google Cloud", "AWS", "Oracle Cloud", "Docker", "GitLab CI/CD", "Terraform", "Kubernetes", "Linux", "Nginx"]
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transforming raw data into strategic insights through dashboards, reports, and telemetry systems.",
      skills: ["Power BI", "Tableau", "Google Analytics", "Excel", "SQL", "R", "Data Warehousing", "ETL", "Looker"]
    },
    {
      title: "Project Management & Agile",
      description: "Leading cross-functional teams from planning through delivery with agile methodologies.",
      skills: ["Scrum", "Kanban", "Jira", "Confluence", "Agile", "Sprint Planning", "Stakeholder Management", "Risk Analysis", "Roadmapping"]
    }
  ];

  const projects = [
    {
      title: "Predictive Energy Management via Track Topology Mapping",
      description: "An advanced system utilizing track topology data to optimize energy consumption and predictive management in transit or industrial systems.",
      githubUrl: "https://github.com/Yeeejj/Predictive-Energy-Management-via-Track-Topology-Mapping.git"
    },
    {
      title: "Digi-Burnout System",
      description: "A digital wellness platform designed to monitor and mitigate burnout through data-driven insights and user-tracking.",
      githubUrl: "https://github.com/Yeeejj/digi-burnout-system.git"
    },
    {
      title: "Tubigan C & J",
      description: "A management and monitoring solution focused on water distribution and utility tracking for streamlined resource delivery.",
      githubUrl: "https://github.com/Yeeejj/tubigan-c-and-j.git"
    },
    {
      title: "Guardian Privacy Monitor",
      description: "A security-focused tool designed to monitor system privacy and alert users to unauthorized data access or vulnerabilities.",
      githubUrl: "https://github.com/Yeeejj/guardian-priv-monitor.git"
    },
    {
      title: "Speed Analysis",
      description: "A performance analysis tool that processes velocity data to provide detailed metrics and visualization.",
      githubUrl: "https://github.com/Yeeejj/Speed_Analysis.git"
    }
  ];

  const certifications = [
    {
      title: "Google Agile Essentials",
      issuer: "Google",
      credlyUrl: "https://www.coursera.org/account/accomplishments/specialization/YYK0J2SSNEQM"
    },
    {
      title: "Google Business Intelligence",
      issuer: "Google",
      credlyUrl: "https://www.coursera.org/account/accomplishments/specialization/76TPMOK0AEK1"
    },
    {
      title: "Google Advanced Data Analytics",
      issuer: "Google",
      credlyUrl: "https://www.coursera.org/account/accomplishments/specialization/E4MV7TP6GUG2"
    },
    {
      title: "Google Data Analytics Professional Certificate (v.3)",
      issuer: "Google",
      credlyUrl: "https://www.credly.com/badges/1372c825-277a-4d8a-adb5-c69d03578646/linked_in_profile"
    },
    {
      title: "Google Project Management Professional Certificate (v.3)",
      issuer: "Google",
      credlyUrl: "https://www.credly.com/badges/907bb47d-fee7-49c0-9b3f-bd4cbd2025a5/linked_in_profile"
    },
    {
      title: "Google AI Professional Certificate",
      issuer: "Google",
      credlyUrl: "https://www.credly.com/badges/0b41bc48-1c5f-4aa9-964d-cd8bc700e495/linked_in_profile"
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      credlyUrl: "https://www.coursera.org/account/accomplishments/verify/X8UJVKP9NF54?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "Oracle Cloud Database Services 2025 Certified Professional",
      issuer: "Oracle",
      credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0F1EC4B473CCC55461B19CD71E8A8A7B69ADE53D17B87EC9C1C2ABF5824788E3"
    },
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      issuer: "Oracle",
      credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D8265F7D6691FA0B2A00D1FAA39814F67BF4A05EA6DE883B991804ECD307BEE6"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8E97A04E56CF1DC03DDB257440AB41F0C972C6E2C9E9DCE8F8B25F9D556DA460"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=33946F8C9E5E1AF1ECBDA74118E4B616C33FA99C71EBFA0A4BDD9F3195A16F48"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=25541D1659AA76411CB6FCE100571F5FD3FE3044C887A123968985C7872B0A40"
    },
    {
      title: "Cisco Ethical Hacker",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/64c00b8b-52b3-4c5e-b594-b832de4e267c/linked_in_profile"
    },
    {
      title: "Cisco Operating Systems Basics",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/a32739f3-6eb1-45dd-b639-b1ec0fc04d1d/linked_in_profile"
    },
    {
      title: "IBM Artificial Intelligence Fundamentals",
      issuer: "IBM",
      credlyUrl: "https://www.credly.com/badges/d96b470d-1764-4112-9166-c689d50140c1/linked_in_profile"
    },
    {
      title: "CyberOps Associate",
      issuer: "Cisco",
      credlyUrl: "https://www.credly.com/badges/67f4682f-f0a2-42c6-aadc-b1a590184836/linked_in_profile"
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yeeejj', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cyreljane/', icon: Linkedin },
    { name: 'Email', url: 'mailto:edano.cyreljane@gmail.com', icon: Mail },
    { name: 'Facebook', url: 'https://www.facebook.com/cyjaneed/', icon: Facebook },
    { name: 'WhatsApp', url: 'https://wa.me/639668011383', icon: MessageCircle },
    { name: 'Telegram', url: 'https://t.me/cyreljane', icon: Send }
  ];

  const interests = [
    "Data", "Brain", "Neuroscience", "Psychology", "Money", "Finance",
    "F1", "Engines", "Cats", "Dogs", "Avocado", "Ocean",
    "Fashion", "Law", "Management", "Business", "Books", "Anime"
  ];

  const navItems = ['about', 'services', 'projects', 'certifications', 'interests', 'contact'];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xpwzgqkr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg bg-[var(--bg-primary)]/90 border-b border-[var(--bg-secondary)]/50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-[var(--accent)] font-tajawal tracking-wide">
            CYREL EDAÑO
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-medium text-sm capitalize"
              >
                {item}
              </button>
            ))}
            <Link
              to="/resume"
              className="flex items-center gap-1.5 text-[var(--accent)] hover:opacity-80 transition-opacity font-medium text-sm"
            >
              <FileText size={15} />
              Resume
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text-primary)] p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--bg-secondary)]/50 bg-[var(--bg-primary)]/95 backdrop-blur-lg">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-medium capitalize"
                >
                  {item}
                </button>
              ))}
              <Link
                to="/resume"
                className="flex items-center gap-1.5 text-[var(--accent)] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText size={15} />
                Resume
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[var(--text-primary)] font-tajawal tracking-tight">
          CYREL EDAÑO
        </h1>
        <TypewriterEffect />
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </button>
          <Link
            to="/resume"
            className="border border-[var(--accent)] text-[var(--accent)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all"
          >
            View Resume
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--accent)] font-cormorant">
              About Me
            </h2>
            <p className="text-base mb-5 text-[var(--text-secondary)] leading-relaxed">
              I am a multi-disciplinary technology professional specializing in the intersection of Data Science, AI/ML Engineering, and Project Management. With a strong technical foundation in Python, SQL, and TensorFlow, I architect end-to-end solutions from engineering real-time computer vision systems and high-precision telemetry dashboards to deploying containerized full-stack applications.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              My technical execution is backed by a massive suite of professional certifications, allowing me to bridge the gap between complex data engineering and strategic business insights. I am driven by delivering scalable, data-driven impact.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile.png"
              alt="Cyrel Edaño"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-[var(--accent)]/30 shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--accent)] font-cormorant">
            Tech Stack & Services
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">
            Core competencies across the full technology spectrum
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                isExpanded={expandedServiceIndex === index}
                onMouseEnter={() => setExpandedServiceIndex(index)}
                onMouseLeave={() => setExpandedServiceIndex(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--accent)] font-cormorant">
            Featured Projects
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">
            A selection of repositories showcasing end-to-end technical work
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--accent)] font-cormorant">
            Professional Certifications
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">
            {certifications.length} verified credentials from industry leaders
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--bg-primary)] p-5 rounded-xl border border-[var(--accent)]/15 hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-[var(--accent)] w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <ExternalLink size={14} className="text-[var(--text-secondary)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                  {cert.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--accent)] font-cormorant">
            Interests
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <InterestBubble key={index} label={interest} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--accent)] font-cormorant text-center">
            Get In Touch
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-xl mx-auto">
            Open for opportunities, collaborations, and conversations
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left: Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-[var(--bg-secondary)]/40 backdrop-blur-sm p-6 rounded-2xl border border-[var(--accent)]/15">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 font-cormorant">
                  Contact
                </h3>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>Cebu, Philippines</p>
                  <a href="mailto:edano.cyreljane@gmail.com" className="block hover:text-[var(--accent)] transition-colors">
                    edano.cyreljane@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)]/40 backdrop-blur-sm p-6 rounded-2xl border border-[var(--accent)]/15">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 font-cormorant">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-[var(--accent)]/20 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-200 group"
                        title={link.name}
                      >
                        <IconComponent size={18} className="text-[var(--text-primary)] group-hover:text-[var(--bg-primary)]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-3">
              <form
                onSubmit={handleFormSubmit}
                className="bg-[var(--bg-secondary)]/40 backdrop-blur-sm p-6 rounded-2xl border border-[var(--accent)]/15 space-y-4"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-cormorant">
                  Send a Message
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="col-span-1 px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--accent)]/20 focus:border-[var(--accent)] outline-none transition-colors text-sm placeholder:text-[var(--text-secondary)]/60"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="col-span-1 px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--accent)]/20 focus:border-[var(--accent)] outline-none transition-colors text-sm placeholder:text-[var(--text-secondary)]/60"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--accent)]/20 focus:border-[var(--accent)] outline-none transition-colors text-sm placeholder:text-[var(--text-secondary)]/60"
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--accent)]/20 focus:border-[var(--accent)] outline-none transition-colors resize-none text-sm placeholder:text-[var(--text-secondary)]/60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--accent)] text-[var(--bg-primary)] px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent Successfully!' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center text-sm">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center text-sm">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--bg-secondary)]/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-secondary)]">
          <p>Cyrel Edaño</p>
          <div className="flex gap-6">
            {socialLinks.slice(0, 4).map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                  title={link.name}
                >
                  <IconComponent size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
