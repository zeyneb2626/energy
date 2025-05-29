import { Material, MaterialSelection, EnergyRating } from '../types';

export const materialCategories: Record<string, Material[]> = {
  walls: [
    { id: 'brick', name: 'Brique', energyImpact: 'Moyen', ratingPoints: 3, color: '#d32f2f' },
    { id: 'concrete', name: 'Béton', energyImpact: 'Élevé', ratingPoints: 1, color: '#757575' },
    { id: 'wood', name: 'Bois', energyImpact: 'Faible', ratingPoints: 5, color: '#795548' },
    { id: 'stone', name: 'Pierre', energyImpact: 'Moyen', ratingPoints: 2, color: '#9e9e9e' }
  ],
  roof: [
    { id: 'tile', name: 'Tuile', energyImpact: 'Moyen', ratingPoints: 3, color: '#ff5722' },
    { id: 'metal', name: 'Métal', energyImpact: 'Moyen', ratingPoints: 4, color: '#607d8b' },
    { id: 'slate', name: 'Ardoise', energyImpact: 'Élevé', ratingPoints: 2, color: '#455a64' },
    { id: 'green', name: 'Toit vert', energyImpact: 'Très faible', ratingPoints: 6, color: '#4caf50' }
  ],
  windows: [
    { id: 'single', name: 'Simple vitrage', energyImpact: 'Très élevé', ratingPoints: 0, color: '#90caf9' },
    { id: 'double', name: 'Double vitrage', energyImpact: 'Moyen', ratingPoints: 3, color: '#42a5f5' },
    { id: 'triple', name: 'Triple vitrage', energyImpact: 'Très faible', ratingPoints: 6, color: '#1565c0' },
    { id: 'low-e', name: 'Vitrage basse émissivité', energyImpact: 'Faible', ratingPoints: 5, color: '#0d47a1' }
  ],
  insulation: [
    { id: 'none', name: 'Sans isolation', energyImpact: 'Extrêmement élevé', ratingPoints: -2, color: '#ffebee' },
    { id: 'minimal', name: 'Isolation minimale', energyImpact: 'Élevé', ratingPoints: 1, color: '#ffcdd2' },
    { id: 'standard', name: 'Isolation standard', energyImpact: 'Moyen', ratingPoints: 3, color: '#ef9a9a' },
    { id: 'high', name: 'Haute isolation', energyImpact: 'Faible', ratingPoints: 5, color: '#e57373' },
    { id: 'premium', name: 'Isolation premium', energyImpact: 'Très faible', ratingPoints: 7, color: '#ef5350' }
  ]
};

export const calculateEnergyRating = (materials: MaterialSelection): EnergyRating => {
  // Get all selected materials
  const wallMaterial = materialCategories.walls.find(m => m.id === materials.walls);
  const roofMaterial = materialCategories.roof.find(m => m.id === materials.roof);
  const windowMaterial = materialCategories.windows.find(m => m.id === materials.windows);
  const insulationMaterial = materialCategories.insulation.find(m => m.id === materials.insulation);
  
  // Calculate total points
  const totalPoints = (wallMaterial?.ratingPoints || 0) +
                      (roofMaterial?.ratingPoints || 0) +
                      (windowMaterial?.ratingPoints || 0) +
                      (insulationMaterial?.ratingPoints || 0);
  
  // Determine rating based on total points
  if (totalPoints >= 20) return 'A+';
  if (totalPoints >= 17) return 'A';
  if (totalPoints >= 14) return 'B';
  if (totalPoints >= 11) return 'C';
  if (totalPoints >= 8) return 'D';
  if (totalPoints >= 5) return 'E';
  if (totalPoints >= 2) return 'F';
  return 'G';
};