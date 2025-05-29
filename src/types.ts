export type EnergyRating = 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export interface EnergyRatingInfo {
  id: EnergyRating;
  color: string;
  range?: string;
  threshold: number;
}