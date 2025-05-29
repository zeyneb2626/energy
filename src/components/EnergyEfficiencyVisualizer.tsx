import React from 'react';
import HouseSVG from './HouseSVG';
import EnergyRatingScale from './EnergyRatingScale';
import { EnergyRating } from '../types';

interface EnergyEfficiencyVisualizerProps {
  energyRating: EnergyRating;
}

const EnergyEfficiencyVisualizer: React.FC<EnergyEfficiencyVisualizerProps> = ({ energyRating }) => {
  return (
    <div className="w-full max-w-xl">
      <div className="text-center mb-2">
        <h3 className="text-lg font-medium text-gray-900">Consommation énergétique</h3>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-40 h-40 md:w-48 md:h-48">
          <HouseSVG rating={energyRating} />
        </div>
        
        <div className="w-full max-w-xs">
          <EnergyRatingScale currentRating={energyRating} />
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Les matériaux choisis donnent à votre maison une performance énergétique de classe <span className="font-bold">{energyRating}</span>
        </p>
      </div>
    </div>
  );
};

export default EnergyEfficiencyVisualizer;