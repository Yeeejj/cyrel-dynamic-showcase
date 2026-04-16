interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[var(--bg-primary)] p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-transform duration-300 border border-[var(--accent)]/10">
      <h3 className="text-xl font-bold text-[var(--accent)] mb-4 font-cormorant">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
