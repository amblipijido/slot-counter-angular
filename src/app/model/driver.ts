import { Team } from './team';
import { Lap } from './lap';
import { Race } from './race';

export interface Driver {
  id: number;
  name: string;
  surname: string;
  alias: string;
  birthDay: Date;
  laps: Lap[];
  team: Team;
  races: Race[];
}
