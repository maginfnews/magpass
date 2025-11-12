"use client";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  bullets: string[];
  icon?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  bullets,
  icon 
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative card p-8 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight 
            className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
              isHovered ? 'translate-x-1 -translate-y-1 text-blue-600' : ''
            }`}
          />
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Bullets */}
        <ul className="space-y-3">
          {bullets.map((bullet, idx) => (
            <li 
              key={bullet} 
              className="flex items-start gap-3 text-sm text-slate-700"
              style={{
                animation: isHovered ? `slideIn 0.3s ease-out ${idx * 0.1}s both` : 'none'
              }}
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}

// Add animation keyframes to globals.css if needed
const style = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
