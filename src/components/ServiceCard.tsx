interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#EEEBDD] p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-bold text-[#630000] mb-4 font-serif">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;