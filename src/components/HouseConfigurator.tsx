import React, { useState, useEffect } from 'react';
import EnergyEfficiencyVisualizer from './EnergyEfficiencyVisualizer';
import MaterialSelector from './MaterialSelector';
import { materialCategories, calculateEnergyRating } from '../data/materials';
import { EnergyRating, MaterialSelection } from '../types';

const HouseConfigurator: React.FC = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<MaterialSelection>({
    walls: materialCategories.walls[0].id,
    roof: materialCategories.roof[0].id,
    windows: materialCategories.windows[0].id,
    insulation: materialCategories.insulation[0].id,
  });
  
  const [currentRating, setCurrentRating] = useState<EnergyRating>('B');
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Calculate the energy rating based on selected materials
    const newRating = calculateEnergyRating(selectedMaterials);
    
    // Trigger animation when rating changes
    if (newRating !== currentRating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
    
    setCurrentRating(newRating);
  }, [selectedMaterials, currentRating]);
  
  const handleMaterialChange = (category: keyof MaterialSelection, materialId: string) => {
    setSelectedMaterials(prev => ({
      ...prev,
      [category]: materialId
    }));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Configuration de votre maison</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <MaterialSelector 
              categories={materialCategories}
              selectedMaterials={selectedMaterials}
              onMaterialChange={handleMaterialChange}
            />
          </div>
          
          <div className={`lg:col-span-2 flex justify-center items-center ${isAnimating ? 'animate-select' : ''}`}>
            <EnergyEfficiencyVisualizer 
              energyRating={currentRating}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Efficacité énergétique actuelle: <span className="font-bold">{currentRating}</span>
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
            Sauvegarder la configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseConfigurator;