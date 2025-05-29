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
      {/* House outline */}
      <path
        d="M40,100 
           L100,40 
           L160,100
           L160,180 
           L40,180 
           L40,100 
           Z"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="4"
      />

      {/* Chimney */}
      <path
        d="M130,60 
           L130,40 
           L145,40 
           L145,70"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="4"
      />

      {/* Door frame */}
      <path
        d="M85,180 
           L85,130 
           L115,130 
           L115,180"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="4"
      />

      {/* Windows */}
      <path
        d="M60,120 
           L60,140 
           L80,140 
           L80,120 
           L60,120"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="4"
      />

      <path
        d="M120,120 
           L120,140 
           L140,140 
           L140,120 
           L120,120"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};

export default HouseSVG;