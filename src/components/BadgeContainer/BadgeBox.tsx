// components/GlowingBox.tsx
import Badge from "./Badge";

interface BadgeItem {
  image: string;
  title: string;
  description : string;
}

interface GlowingBoxProps {
  badges: BadgeItem[];
}

export default function GlowingBox({ badges }: GlowingBoxProps) {
  return (
<div className="relative p-6 rounded-lg flex flex-wrap gap-6 justify-center items-center border border-green-800 max-w-[54%] shadow-lg shadow-green-500/20 transition-all">      {/* Glowing Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-glow"></div>

      {/* Render Badges using the Badge Component */}
      {badges.map((badge, index) => (
        <Badge key={index} image={badge.image} title={badge.title} description=  {badge.description}/>
      ))}
    </div>
  );
}
