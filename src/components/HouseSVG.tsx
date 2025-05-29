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
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Door */}
      <path
        d="M90,140
           L90,100
           C90,97 93,95 95,95
           L105,95
           C107,95 110,97 110,100
           L110,140"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chimney */}
      <path
        d="M130,45
           L130,25"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HouseSVG;