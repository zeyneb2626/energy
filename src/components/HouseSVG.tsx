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
      {/* Background palm trees */}
      <g transform="translate(20, 140) scale(0.8)">
        <path
          d="M0,0 C-2,0 -8,-35 -5,-40 C-2,-45 2,-45 5,-40 C8,-35 2,0 0,0 Z"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="1"
        />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M0,${-30 - i * 5}
               C-15,${-35 - i * 5} -25,${-30 - i * 5} -30,${-20 - i * 5}
               C-20,${-25 - i * 5} -10,${-28 - i * 5} 0,${-30 - i * 5}
               C10,${-28 - i * 5} 20,${-25 - i * 5} 30,${-20 - i * 5}
               C25,${-30 - i * 5} 15,${-35 - i * 5} 0,${-30 - i * 5}`}
            fill={`rgb(${34 + i * 20}, ${139 + i * 20}, ${34 + i * 20})`}
            stroke="#006400"
            strokeWidth="1"
          />
        ))}
      </g>

      <g transform="translate(180, 140) scale(-0.8, 0.8)">
        <path
          d="M0,0 C-2,0 -8,-35 -5,-40 C-2,-45 2,-45 5,-40 C8,-35 2,0 0,0 Z"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="1"
        />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M0,${-30 - i * 5}
               C-15,${-35 - i * 5} -25,${-30 - i * 5} -30,${-20 - i * 5}
               C-20,${-25 - i * 5} -10,${-28 - i * 5} 0,${-30 - i * 5}
               C10,${-28 - i * 5} 20,${-25 - i * 5} 30,${-20 - i * 5}
               C25,${-30 - i * 5} 15,${-35 - i * 5} 0,${-30 - i * 5}`}
            fill={`rgb(${34 + i * 20}, ${139 + i * 20}, ${34 + i * 20})`}
            stroke="#006400"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Ground/terrain with texture */}
      <path
        d="M20,140 
           Q50,138 80,140 
           Q110,142 140,140 
           Q170,138 180,140"
        fill="none"
        stroke="#2E7D32"
        strokeWidth="2"
      />
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d={`M${30 + i * 20},140 
              Q${35 + i * 20},142 ${40 + i * 20},140`}
          fill="none"
          stroke="#1B5E20"
          strokeWidth="1"
        />
      ))}

      {/* House foundation with texture */}
      <path
        d="M35,140 
           Q100,138 165,140"
        fill="none"
        stroke="#666"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Main house structure with detailed walls */}
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

      {/* Wall texture details */}
      {[...Array(5)].map((_, i) => (
        <path
          key={i}
          d={`M45,${90 + i * 10} L155,${90 + i * 10}`}
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="4 4"
          opacity="0.3"
        />
      ))}
      
      {/* Enhanced door with frame and details */}
      <path
        d="M85,140
           L85,95
           C85,92 88,90 90,90
           L110,90
           C112,90 115,92 115,95
           L115,140"
        fill="#8B4513"
        stroke="#654321"
        strokeWidth="2"
      />
      
      {/* Door panels */}
      <path
        d="M90,95 L110,95 M90,115 L110,115"
        fill="none"
        stroke="#654321"
        strokeWidth="1"
      />
      
      {/* Door handle */}
      <circle cx="108" cy="115" r="2" fill="#DAA520"/>
      <path
        d="M108,113 L108,117"
        stroke="#DAA520"
        strokeWidth="1"
      />

      {/* Enhanced windows with frames and glass effect */}
      {[
        [55, 100],
        [125, 100]
      ].map(([x, y]) => (
        <g key={x}>
          <rect
            x={x}
            y={y}
            width="20"
            height="20"
            fill="#E3F2FD"
            stroke={color}
            strokeWidth="2"
          />
          <path
            d={`M${x},${y + 10} L${x + 20},${y + 10}
                M${x + 10},${y} L${x + 10},${y + 20}`}
            stroke={color}
            strokeWidth="1"
          />
          <rect
            x={x}
            y={y}
            width="20"
            height="20"
            fill="url(#windowGradient)"
            opacity="0.2"
          />
        </g>
      ))}

      {/* Window reflection gradient */}
      <defs>
        <linearGradient id="windowGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Enhanced chimney with brick texture */}
      <path
        d="M130,45 L130,25"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* Brick texture on chimney */}
      {[...Array(3)].map((_, i) => (
        <path
          key={i}
          d={`M127,${30 - i * 3} L133,${30 - i * 3}`}
          stroke={color}
          strokeWidth="0.5"
          opacity="0.3"
        />
      ))}
      
      {/* Animated smoke effect */}
      <g className="smoke">
        {[4, 8, 12].map((y) => (
          <path
            key={y}
            d={`M128,${20 - y} 
                C${132},${18 - y} ${134},${16 - y} ${132},${14 - y}
                M${132},${15 - y}
                C${136},${13 - y} ${138},${11 - y} ${136},${9 - y}`}
            fill="none"
            stroke="#999"
            strokeWidth="1"
            strokeLinecap="round"
            opacity={0.3 + (y / 40)}
          />
        ))}
      </g>
    </svg>
  );
};

export default HouseSVG;