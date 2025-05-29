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
        d="M60,180 
           L60,90 
           C60,85 62,80 67,80
           L95,40
           C97,37 103,37 105,40
           L133,80
           C138,80 140,85 140,90
           L140,180"
        fill="none"
        className="energy-rating-transition"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chimney */}
      <path
        d="M115,50
           L115,30"
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