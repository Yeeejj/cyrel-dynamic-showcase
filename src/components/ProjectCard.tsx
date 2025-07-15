interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, githubUrl }: ProjectCardProps) => {
  return (
    <div className="bg-[#D8B6A4] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="p-8">
        <h3 className="text-xl font-bold text-black mb-4 font-serif">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#630000] text-[#EEEBDD] px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;