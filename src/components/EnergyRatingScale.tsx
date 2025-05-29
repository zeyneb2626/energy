import React from 'react';
import { EnergyRating } from '../types';
import { energyRatings } from '../data/energyRatings';

interface EnergyRatingScaleProps {
  currentRating: EnergyRating;
}

const EnergyRatingScale: React.FC<EnergyRatingScaleProps> = ({ currentRating }) => {
  return (
    <div className="w-full">
      {energyRatings.map((rating) => (
        <div 
          key={rating.id} 
          className={`flex items-center mb-1 ${currentRating === rating.id ? 'scale-105 transform' : ''}`}
          style={{ transition: 'transform 0.3s ease' }}
        >
          <div 
            className="w-full h-8 flex items-center px-3 text-white font-medium rounded-r-full transition-all duration-300"
            style={{ 
              backgroundColor: rating.color,
              width: `${rating.id === currentRating ? '100%' : '85%'}`,
              transform: `translateX(${rating.id === currentRating ? '10px' : '0'})`,
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <span className="mr-2">{rating.id}</span>
            {rating.range && <span className="text-sm">{rating.range}</span>}
          </div>
        </div>
      ))}

      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Très performant</span>
        <span>Peu performant</span>
      </div>
    </div>
  );
};

export default EnergyRatingScale;