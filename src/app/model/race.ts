import { Driver } from './driver';
import { Lap } from './lap';
import { SpeedWay } from './speed-way';
import { Line } from './line';


export interface Race {
  lapsToFinish?: number;
  timeToFinish?: number;
  lines: Line[];
  laps?: Lap[];
  speedway?: SpeedWay;
  raceDate?: Date;
}
