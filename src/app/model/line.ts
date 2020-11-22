import { Car } from './car';
import { Driver } from './driver';
import { Lap } from './lap';

export interface Line {
  position: number;
  lineNumber: number;
  raceDriver: Driver;
  raceCar: Car;
  bestLap: number;
  laps: Lap[];
  lenght: number;
}
