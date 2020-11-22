import { Race } from './race';

export interface SpeedWay {
  id?: number;
  numberOfLines?: number;
  name?: string;
  description?: string;
  length?: number;
  races?: Race[];
}
