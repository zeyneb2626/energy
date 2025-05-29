import React from 'react';
import { MaterialCategory } from '../types';

interface MaterialSelectorProps {
  categories: Record<string, MaterialCategory[]>;
  selectedMaterials: Record<string, string>;
  onMaterialChange: (category: string, materialId: string) => void;
}

const MaterialSelector: React.FC<MaterialSelectorProps> = ({
  categories,
  selectedMaterials,
  onMaterialChange
}) => {
  return (
    <div className="space-y-6">
      {Object.entries(categories).map(([categoryName, materials]) => (
        <div key={categoryName} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
            {categoryName.replace('-', ' ')}
          </h3>
          
          <div className="grid grid-cols-1 gap-3">
            {materials.map((material) => (
              <div
                key={material.id}
                className={`
                  flex items-center justify-between p-4 rounded-lg cursor-pointer
                  transition-all duration-300 ease-in-out
                  ${selectedMaterials[categoryName] === material.id
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }
                `}
                onClick={() => onMaterialChange(categoryName, material.id)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: material.color }}
                  />
                  <div>
                    <p className="font-medium text-gray-900">{material.name}</p>
                    <p className="text-sm text-gray-500">Impact: {material.energyImpact}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    {material.ratingPoints > 0 ? `+${material.ratingPoints}` : material.ratingPoints}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${
                    material.ratingPoints >= 4 ? 'bg-green-500' :
                    material.ratingPoints >= 2 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialSelector;