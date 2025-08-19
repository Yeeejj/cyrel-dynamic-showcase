import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import TypewriterEffect from '@/components/TypewriterEffect';
import ThemeToggle from '@/components/ThemeToggle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Github, Linkedin, Mail, MessageCircle, MessageSquare, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yeeejj', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cyreljane/', icon: 'Linkedin' },
    { name: 'Email', url: 'mailto:edano.cyreljane@gmail.com', icon: 'Mail' },
    { name: 'Facebook', url: 'https://m.me/cyjaneed', icon: 'MessageCircle' },
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
            <button onClick={() => navigate('/certifications')} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold">
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[var(--bg-secondary)] rounded-3xl mx-6 mb-8">
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
                Send
              };
              
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="bg-[var(--accent)] text-[var(--bg-primary)] p-4 rounded-xl hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  title={link.name}
                >
                  <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-200" />
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
