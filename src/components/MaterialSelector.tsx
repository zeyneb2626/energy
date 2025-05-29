import React from 'react';
import { MaterialCategory, MaterialSelection } from '../types';

interface MaterialSelectorProps {
  categories: Record<string, MaterialCategory[]>;
  selectedMaterials: MaterialSelection;
  onMaterialChange: (category: keyof MaterialSelection, materialId: string) => void;
}

const MaterialSelector: React.FC<MaterialSelectorProps> = ({ 
  categories, 
  selectedMaterials, 
  onMaterialChange 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Sélection des matériaux</h3>
      
      {Object.entries(categories).map(([categoryName, materials]) => (
        <div key={categoryName} className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 capitalize mb-2">
            {categoryName}
          </h4>
          
          <div className="grid grid-cols-1 gap-2">
            {materials.map((material) => (
              <div 
                key={material.id}
                className={`material-item border rounded-md p-3 cursor-pointer 
                  ${selectedMaterials[categoryName as keyof MaterialSelection] === material.id 
                    ? 'selected' 
                    : 'border-gray-200 hover:border-indigo-300'}`}
                onClick={() => onMaterialChange(
                  categoryName as keyof MaterialSelection, 
                  material.id
                )}
              >
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-2" 
                    style={{ backgroundColor: material.color }}
                  ></div>
                  <span className="text-sm">{material.name}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Impact: {material.energyImpact}
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