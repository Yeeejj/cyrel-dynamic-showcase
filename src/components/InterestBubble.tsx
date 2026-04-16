import { useState } from 'react';

const interestImages: Record<string, string> = {
  "Data":          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=240&fit=crop&auto=format&q=80",
  "Brain":         "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=240&h=240&fit=crop&auto=format&q=80",
  "Neuroscience":  "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=240&h=240&fit=crop&auto=format&q=80",
  "Psychology":    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=240&h=240&fit=crop&auto=format&q=80",
  "Money":         "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=240&h=240&fit=crop&auto=format&q=80",
  "Finance":       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=240&h=240&fit=crop&auto=format&q=80",
  "F1":            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2023_Red_Bull_RB19.jpg/320px-2023_Red_Bull_RB19.jpg",
  "Engines":       "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=240&h=240&fit=crop&auto=format&q=80",
  "Cats":          "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=240&h=240&fit=crop&auto=format&q=80",
  "Dogs":          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=240&h=240&fit=crop&auto=format&q=80",
  "Avocado":       "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=240&h=240&fit=crop&auto=format&q=80",
  "Ocean":         "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=240&h=240&fit=crop&auto=format&q=80",
  "Fashion":       "https://images.unsplash.com/photo-1761163337557-827da2d40001?w=240&h=240&fit=crop&auto=format&q=80",
  "Law":           "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=240&h=240&fit=crop&auto=format&q=80",
  "Management":    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=240&h=240&fit=crop&auto=format&q=80",
  "Business":      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=240&h=240&fit=crop&auto=format&q=80",
  "Books":         "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=240&h=240&fit=crop&auto=format&q=80",
  "Anime":         "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=240&h=240&fit=crop&auto=format&q=80",
};

const InterestBubble = ({ label }: { label: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imageSrc = interestImages[label];

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`inline-block px-5 py-2.5 rounded-full text-sm font-medium border cursor-default transition-all duration-300 ${
          isHovered
            ? 'bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)]'
            : 'bg-[var(--bg-secondary)]/50 text-[var(--text-primary)] border-[var(--accent)]/10'
        }`}
      >
        {label}
      </span>

      {isHovered && imageSrc && !imgError && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none">
          <span className="block w-32 h-32 rounded-xl overflow-hidden border-2 border-[var(--accent)]/25 shadow-2xl bg-[var(--bg-secondary)]">
            <img
              src={imageSrc}
              alt={label}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-[var(--bg-secondary)] border-r border-b border-[var(--accent)]/25" />
        </span>
      )}
    </span>
  );
};

export default InterestBubble;
