import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, githubUrl }: ProjectCardProps) => {
  return (
    <div className="bg-[var(--bg-secondary)] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-[var(--accent)]/10">
      <div className="p-8">
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-cormorant">{title}</h3>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg-primary)] px-5 py-2.5 rounded-lg font-semibold hover:opacity-80 transition-opacity text-sm"
        >
          View Repository
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
