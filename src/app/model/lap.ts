import { Race } from './race';
import { Line } from './line';

export interface Lap {
  id?: number;
  line: Line;
  race?: Race;
  lapTime: number;
  lapNumber?: number;
}
