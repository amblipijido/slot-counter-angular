import { Driver } from './driver';

export interface Team {
  id: number;
  name: string;
  description: string;
  raceDrivers: Driver[];
}
