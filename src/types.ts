export type EnergyRating = 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export interface Material {
  id: string;
  name: string;
  energyImpact: string;
  ratingPoints: number;
  color: string;
}

export type MaterialCategory = Material;

export interface MaterialSelection {
  walls: string;
  roof: string;
  windows: string;
  insulation: string;
}

export interface EnergyRatingInfo {
  id: EnergyRating;
  color: string;
  range?: string;
  threshold: number;
}