import { EnergyRatingInfo } from '../types';

export const energyRatings: EnergyRatingInfo[] = [
  { id: 'A+', color: '#1B5E20', range: '≤ 50', threshold: 20 },
  { id: 'A', color: '#2E7D32', range: '51 à 90', threshold: 17 },
  { id: 'B', color: '#388E3C', range: '91 à 150', threshold: 14 },
  { id: 'C', color: '#8BC34A', range: '151 à 230', threshold: 11 },
  { id: 'D', color: '#FFEB3B', range: '231 à 330', threshold: 8 },
  { id: 'E', color: '#FFC107', range: '331 à 450', threshold: 5 },
  { id: 'F', color: '#FF9800', range: '451 à 590', threshold: 2 },
  { id: 'G', color: '#F44336', range: '> 590', threshold: 0 }
];

export const getInitialRating = (): EnergyRatingInfo => {
  return energyRatings.find(rating => rating.id === 'B') || energyRatings[2];
};