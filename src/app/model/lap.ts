import { Race } from './race';
import { Driver } from './driver';
import { Car } from './car';

export interface Lap {
  id: number;
  lineNumber: number;
  race: Race;
  raceDriver: Driver;
  raceCar: Car;
  lapTime: number;
  lapNumber: number;
  lapDate: DataCue;
}
