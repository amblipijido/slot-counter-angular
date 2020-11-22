import { Car } from './car';
import { Driver } from './driver';

export interface Player {
  driver: Driver;
  car: Car;
  line: number;
}
