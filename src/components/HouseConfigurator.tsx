import React, { useState, useEffect } from 'react';
import { Home, Droplets, Sun, Wind } from 'lucide-react';
import MaterialSelector from './MaterialSelector';
import EnergyEfficiencyVisualizer from './EnergyEfficiencyVisualizer';
import { materialCategories } from '../data/materials';
import { calculateEnergyRating } from '../utils/calculations';
import { MaterialSelection, EnergyRating } from '../types';

const HouseConfigurator: React.FC = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<MaterialSelection>({
    walls: 'brick',
    roof: 'tile',
    windows: 'double',
    insulation: 'standard'
  });

  const [currentRating, setCurrentRating] = useState<EnergyRating>('C');
  const [totalCost, setTotalCost] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const newRating = calculateEnergyRating(selectedMaterials);
    if (newRating !== currentRating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
    setCurrentRating(newRating);
    
    // Calculer le coût total
    const cost = Object.entries(selectedMaterials).reduce((total, [category, materialId]) => {
      const material = materialCategories[category].find(m => m.id === materialId);
      return total + (material?.cost || 0);
    }, 0);
    setTotalCost(cost);
  }, [selectedMaterials, currentRating]);

  const handleMaterialChange = (category: keyof MaterialSelection, materialId: string) => {
    setSelectedMaterials(prev => ({
      ...prev,
      [category]: materialId
    }));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sélecteur de matériaux */}
        <div className="lg:col-span-2">
          <MaterialSelector
            categories={materialCategories}
            selectedMaterials={selectedMaterials}
            onMaterialChange={handleMaterialChange}
          />
        </div>

        {/* Visualisation et statistiques */}
        <div className="lg:col-span-1 space-y-6">
          <div className={`bg-white p-6 rounded-lg shadow-sm ${isAnimating ? 'animate-select' : ''}`}>
            <EnergyEfficiencyVisualizer energyRating={currentRating} />
          </div>

          {/* Statistiques */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Home className="w-5 h-5 text-indigo-500" />
                  <span className="text-gray-600">Coût total</span>
                </div>
                <span className="font-semibold">{new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(totalCost)}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Isolation thermique</span>
                </div>
                <span className="font-semibold">{currentRating}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">Exposition solaire</span>
                </div>
                <span className="font-semibold">Optimale</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Ventilation</span>
                </div>
                <span className="font-semibold">Naturelle</span>
              </div>
            </div>
          </div>

          {/* Bouton de sauvegarde */}
          <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold
            hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2
            focus:ring-indigo-500 focus:ring-offset-2">
            Sauvegarder la configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseConfigurator;