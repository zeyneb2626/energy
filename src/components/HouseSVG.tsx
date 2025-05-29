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
      {/* House Silhouette */}
      <path
        d="M100,20 L30,80 L30,180 L80,180 L80,120 L120,120 L120,180 L170,180 L170,80 Z"
        className="energy-rating-transition"
        fill={color}
        stroke="#333"
        strokeWidth="2"
      />
      
      {/* Door */}
      <rect
        x="90"
        y="140"
        width="20"
        height="40"
        fill="#5D4037"
      />
      
      {/* Windows */}
      <rect
        x="50"
        y="90"
        width="20"
        height="20"
        fill="#E3F2FD"
        stroke="#333"
        strokeWidth="1"
      />
      
      <rect
        x="130"
        y="90"
        width="20"
        height="20"
        fill="#E3F2FD"
        stroke="#333"
        strokeWidth="1"
      />
    </svg>
  );
};

export default HouseSVG;