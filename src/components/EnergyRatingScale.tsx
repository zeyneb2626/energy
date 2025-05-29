import React from 'react';
import { EnergyRating } from '../types';

interface EnergyRatingScaleProps {
  currentRating: EnergyRating;
}

const EnergyRatingScale: React.FC<EnergyRatingScaleProps> = ({ currentRating }) => {
  const ratings = [
    { id: 'A+', range: '≤ 50', color: '#1B5E20' },
    { id: 'A', range: '51 à 90', color: '#2E7D32' },
    { id: 'B', range: '91 à 150', color: '#388E3C' },
    { id: 'C', range: '151 à 230', color: '#8BC34A' },
    { id: 'D', range: '231 à 330', color: '#FFEB3B', darkText: true },
    { id: 'E', range: '331 à 450', color: '#FFC107', darkText: true },
    { id: 'F', range: '451 à 590', color: '#FF9800' },
    { id: 'G', range: '> 590', color: '#F44336' }
  ];

  return (
    <div className="flex flex-col gap-1 w-full max-w-[280px]">
      {ratings.map((rating) => (
        <div
          key={rating.id}
          className={`
            flex items-center h-8 px-3 rounded-l-md transition-all duration-300 ease-in-out
            ${currentRating === rating.id ? 'w-full translate-x-2' : 'w-[85%]'}
            ${rating.darkText ? 'text-gray-800' : 'text-white'}
          `}
          style={{ backgroundColor: rating.color }}
        >
          <span className="font-semibold min-w-[25px] mr-3">{rating.id}</span>
          <span className="text-sm opacity-90">{rating.range}</span>
        </div>
      ))}
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Très performant</span>
        <span>Peu performant</span>
      </div>
    </div>
  );
};

export default EnergyRatingScale;