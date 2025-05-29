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
      {/* Palm tree left */}
      <g transform="translate(20, 140) scale(0.8)">
        <path
          d="M0,0 L-5,-30 C-5,-35 5,-35 5,-30 L0,0"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="1"
        />
        <path
          d="M0,-30
             C-15,-35 -25,-30 -30,-20
             C-20,-25 -10,-28 0,-30
             C10,-28 20,-25 30,-20
             C25,-30 15,-35 0,-30"
          fill="#228B22"
          stroke="#006400"
          strokeWidth="1"
        />
        <path
          d="M0,-25
             C-12,-28 -20,-25 -25,-15
             C-15,-20 -8,-23 0,-25
             C8,-23 15,-20 25,-15
             C20,-25 12,-28 0,-25"
          fill="#32CD32"
          stroke="#228B22"
          strokeWidth="1"
        />
      </g>

      {/* Palm tree right */}
      <g transform="translate(180, 140) scale(-0.8, 0.8)">
        <path
          d="M0,0 L-5,-30 C-5,-35 5,-35 5,-30 L0,0"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="1"
        />
        <path
          d="M0,-30
             C-15,-35 -25,-30 -30,-20
             C-20,-25 -10,-28 0,-30
             C10,-28 20,-25 30,-20
             C25,-30 15,-35 0,-30"
          fill="#228B22"
          stroke="#006400"
          strokeWidth="1"
        />
        <path
          d="M0,-25
             C-12,-28 -20,-25 -25,-15
             C-15,-20 -8,-23 0,-25
             C8,-23 15,-20 25,-15
             C20,-25 12,-28 0,-25"
          fill="#32CD32"
          stroke="#228B22"
          strokeWidth="1"
        />
      </g>

      {/* Base/Foundation */}
      <path
        d="M35,140 L165,140"
        fill="none"
        stroke="#666"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Main house shape with rounded corners */}
      <path
        d="M40,140 
           L40,80 
           C40,75 42,70 47,70
           L95,30
           C97,27 103,27 105,30
           L153,70
           C158,70 160,75 160,80
           L160,140"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Door with frame */}
      <path
        d="M85,140
           L85,95
           C85,92 88,90 90,90
           L110,90
           C112,90 115,92 115,95
           L115,140"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Door handle */}
      <circle
        cx="108"
        cy="115"
        r="2"
        fill="#666"
      />

      {/* Windows */}
      <path
        d="M55,100 
           L75,100
           M55,100
           L55,120
           M75,100
           L75,120
           M55,120
           L75,120"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <path
        d="M125,100 
           L145,100
           M125,100
           L125,120
           M145,100
           L145,120
           M125,120
           L145,120"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Chimney with smoke */}
      <path
        d="M130,45
           L130,25"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Smoke curves */}
      <path
        d="M128,20 
           C132,18 134,16 132,14
           M132,15
           C136,13 138,11 136,9
           M136,10
           C140,8 142,6 140,4"
        fill="none"
        stroke="#999"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

export default HouseSVG;