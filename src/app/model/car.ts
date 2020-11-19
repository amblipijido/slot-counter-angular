import { Lap } from './lap';
import { RaceCarGroup } from './race-car-group';
import { Race } from './race';

export interface Car {
  id: number;
  brand: string;
  model: string;
  ref: string;
  fuelConsumption: number;
  fuelRemaining: number;
  laps: Lap[];
  raceCarGroup: RaceCarGroup;
  races: Race[];
}
