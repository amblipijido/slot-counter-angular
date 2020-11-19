import { Driver } from './driver';
import { Lap } from './lap';
import { SpeedWaysComponent } from '../pages/speed-ways/speed-ways.component';
import { Car } from './car';
import { SpeedWay } from './speed-way';

export interface Race {
  raceDrivers: Driver[];
  raceCars: Car[];
  lapsToFinish: number;
  timeToFinish: number;
  laps: Lap[];
  speedway: SpeedWay;
  raceDate: Date;
}
