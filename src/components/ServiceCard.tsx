import { ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  skills: string[];
  isExpanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceCard = ({ title, description, skills, isExpanded, onMouseEnter, onMouseLeave }: ServiceCardProps) => {
  return (
    <div
      className={`bg-[var(--bg-primary)] rounded-2xl border transition-colors duration-300 ${
        isExpanded ? 'border-[var(--accent)]/40' : 'border-[var(--accent)]/10'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[var(--accent)] font-cormorant leading-snug">
            {title}
          </h3>
          <ChevronDown
            size={18}
            className={`text-[var(--text-secondary)] flex-shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm mt-3">
          {description}
        </p>
      </div>

      {isExpanded && (
        <div className="px-6 pb-5 pt-1 border-t border-[var(--accent)]/10">
          <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
            Skills & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--accent)]/10 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
