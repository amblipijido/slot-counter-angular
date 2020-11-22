import { Car } from "./car";

export interface RaceCarGroup {
  id?: number;
  name?: string;
  description?: string;
  raceCars?: Car[];
}
