import React from 'react';
import { EnergyRating } from '../types';
import { getRatingColor } from '../utils/colors';

interface HouseSVGProps {
  rating: EnergyRating;
}

const HouseSVG: React.FC<HouseSVGProps> = ({ rating }) => {
  const color = getRatingColor(rating);
  
  return (
    <svg 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Arbres améliorés */}
      {[
        { x: 20, scale: 1 },
        { x: 180, scale: -1 }
      ].map((tree, index) => (
        <g key={index} transform={`translate(${tree.x}, 140) scale(${tree.scale}, 1)`}>
          {/* Tronc d'arbre détaillé */}
          <path
            d="M0,0 
               C-2,0 -3,-20 -2,-25 
               C-1,-27 1,-27 2,-25 
               C3,-20 2,0 0,0"
            fill="#795548"
            stroke="#5D4037"
            strokeWidth="1"
          />
          
          {/* Feuillage multicouche */}
          {[...Array(4)].map((_, i) => (
            <g key={i} transform={`translate(0, ${-20 - i * 5})`}>
              <path
                d={`M0,0 
                    C-8,${-3} -15,${-6} -12,${-12}
                    C-10,${-15} -5,${-18} 0,${-15}
                    C5,${-18} 10,${-15} 12,${-12}
                    C15,${-6} 8,${-3} 0,0`}
                fill={`rgb(${34 + i * 10}, ${139 + i * 5}, ${34 + i * 10})`}
                stroke="#2E7D32"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </g>
      ))}

      {/* Sol et herbe détaillée */}
      <path
        d="M0,140 H200"
        stroke="#2E7D32"
        strokeWidth="2"
      />
      
      {/* Touffes d'herbe */}
      {[...Array(20)].map((_, i) => (
        <g key={i} transform={`translate(${i * 10}, 140)`}>
          <path
            d={`M0,0 
                C1,-3 2,-4 3,-3
                M0,0
                C-1,-2 -0.5,-3 0.5,-4
                M0,0
                C0,-2 0.5,-3 1,-2`}
            stroke="#4CAF50"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Structure principale de la maison */}
      <path
        d="M40,140 
           L40,80 
           C40,75 42,70 47,70
           L95,30
           C97,27 103,27 105,30
           L153,70
           C158,70 160,75 160,80
           L160,140"
        fill={`${color}33`}
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Reste du code SVG inchangé... */}
      {/* Fenêtres, porte, cheminée, etc. */}
    </svg>
  );
};

export default HouseSVG;