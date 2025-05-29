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
      {/* Full house outline matching reference style */}
      <path
        d="M40,180 
           L40,80 
           L100,20
           L160,80
           L160,180
           M40,80
           C40,80 70,80 100,80
           C130,80 160,80 160,80"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HouseSVG;