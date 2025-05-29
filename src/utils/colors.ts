import { EnergyRating } from '../types';
import { energyRatings } from '../data/energyRatings';

export const getRatingColor = (rating: EnergyRating): string => {
  const ratingInfo = energyRatings.find(r => r.id === rating);
  return ratingInfo?.color || '#388E3C'; // Default to B color if not found
};