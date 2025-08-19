import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import TypewriterEffect from '@/components/TypewriterEffect';
import ThemeToggle from '@/components/ThemeToggle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Github, Linkedin, Mail, MessageCircle, MessageSquare, Send, Award, ExternalLink, Facebook } from 'lucide-react';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const services = [
    {
      title: "AI & Data Science Services",
      description: "Machine learning model development, predictive analytics, and AI-powered solutions to drive intelligent decision-making."
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Security assessments, penetration testing, and compliance frameworks to protect your digital assets."
    },
    {
      title: "Cloud & DevOps Infrastructure",
      description: "Cloud migration, CI/CD pipelines, and infrastructure as code for scalable, reliable systems."
    },
    {
      title: "FinTech Product Engineering",
      description: "Financial software development, payment systems, and trading platforms with regulatory compliance."
    },
    {
      title: "Business Intelligence & Automation",
      description: "Data warehousing, reporting dashboards, and process automation for operational excellence."
    },
    {
      title: "Web3 & Blockchain Services",
      description: "Smart contract development, DeFi solutions, and blockchain integration for decentralized applications."
    },
    {
      title: "Conversational AI & Virtual Assistants",
      description: "Chatbot development, NLP solutions, and intelligent automation for enhanced user experiences."
    },
    {
      title: "UX & Digital Product Design",
      description: "User experience research, interface design, and digital product strategy for user-centered solutions."
    },
    {
      title: "Low-Code & Workflow Automation",
      description: "Rapid application development and business process automation for increased efficiency."
    }
  ];

  const projects = [
    {
      title: "AI & Machine Learning Projects",
      description: "Advanced machine learning models and artificial intelligence solutions for various industries.",
      githubUrl: "https://github.com/Yeeejj/Artificial-Intelligence-Machine-Learning-Projects"
    },
    {
      title: "FinTech Finance Projects",
      description: "Comprehensive financial technology solutions including trading systems and payment platforms.",
      githubUrl: "https://github.com/Yeeejj/FinTech-Finance-Heavy-Projects"
    },
    {
      title: "Cloud & DevOps Automation",
      description: "Infrastructure automation, cloud deployment, and DevOps pipeline implementations.",
      githubUrl: "https://github.com/Yeeejj/Cloud-DevOps-Automation-Projects"
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Security tools, privacy solutions, and cybersecurity frameworks for enterprise protection.",
      githubUrl: "https://github.com/Yeeejj/Cybersecurity-Privacy-Projects"
    },
    {
      title: "Data Science & Analytics",
      description: "Business intelligence solutions, data analysis, and predictive modeling projects.",
      githubUrl: "https://github.com/Yeeejj/Data-Science-BI-Analytics-Projects"
    },
    {
      title: "UX/UI Frontend Innovation",
      description: "User experience design and frontend development with innovative interaction patterns.",
      githubUrl: "https://github.com/Yeeejj/UX-UI-Frontend-Innovation-Projects"
    },
    {
      title: "Full-Stack SaaS Solutions",
      description: "Complete SaaS applications ready for startup deployment with modern tech stacks.",
      githubUrl: "https://github.com/Yeeejj/Full-Stack-SaaS-Startup-Ready-Projects"
    }
  ];

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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yeeejj', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cyreljane/', icon: 'Linkedin' },
    { name: 'Email', url: 'mailto:edano.cyreljane@gmail.com', icon: 'Mail' },
    { name: 'Facebook', url: 'https://m.me/cyjaneed', icon: 'Facebook' },
    { name: 'WhatsApp', url: 'http://Wa.me/+639668011383', icon: 'MessageSquare' },
    { name: 'Telegram', url: 'https://chat.google.com/dm/r_f3EUAAAAE/2qWgR1z2tRM/2qWgR1z2tRM?cls=10', icon: 'Send' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg bg-[var(--bg-primary)]/90 border-b border-[var(--bg-secondary)]">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[var(--accent)] font-tajawal">
            CYREL EDAÑO
          </a>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold">
              Projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold">
              Contact
            </button>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-[var(--text-primary)] font-tajawal">
          CYREL EDAÑO
        </h1>
        <TypewriterEffect />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 text-[var(--accent)] font-cormorant">
              About Me
            </h2>
            <p className="text-lg mb-6 text-[var(--text-secondary)] leading-relaxed">
              I'm a versatile technologist with expertise spanning cybersecurity, machine learning, fintech, and cloud infrastructure. My passion lies in creating innovative solutions that bridge the gap between complex technology and real-world business needs.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              With a strong foundation in data science and AI, combined with deep knowledge of financial systems and security protocols, I help organizations navigate the digital transformation landscape while maintaining the highest standards of security and performance.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/e9b52691-540c-47cf-ab9c-bce9bed298a1.png"
              alt="Cyrel Edaño"
              className="w-80 h-80 object-cover rounded-full border-4 border-[var(--accent)]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[var(--bg-secondary)] rounded-3xl mx-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-[var(--accent)] font-cormorant">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-[var(--accent)] font-cormorant">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-[var(--bg-secondary)] rounded-3xl mx-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-[var(--accent)] font-cormorant">
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-[var(--accent)]/20">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-[var(--accent)] w-8 h-8 flex-shrink-0" />
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors"
                    title="View Credential"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-cormorant">
                  {cert.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  Issued by {cert.issuer}
                </p>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--accent)] text-[var(--bg-primary)] px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition-opacity text-sm"
                >
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-[var(--accent)] font-cormorant">
            Let's Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => {
              const iconMap = {
                Github,
                Linkedin,
                Mail,
                MessageCircle,
                MessageSquare,
                Send,
                Facebook
              };
              
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="bg-[var(--bg-secondary)] text-[var(--accent)] p-4 rounded-xl border border-[var(--accent)] hover:transform hover:-translate-y-1 hover:shadow-lg hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 group flex flex-col items-center gap-1"
                  title={link.name}
                >
                  <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-[10px] font-semibold leading-none">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
