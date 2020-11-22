import { Pipe, PipeTransform } from '@angular/core';
import { Lap } from '../model/lap';

@Pipe({name: 'lapSpeed'})
export class LapSpeedPipe implements PipeTransform {
  transform(value: Lap): string {
    const scaledLenght = value.line.lenght * 32;
    const lapTimeInSeconds = value.lapTime / 1000;
    const speed = (scaledLenght / lapTimeInSeconds) * 3.6;
    return `${speed.toFixed(2)} Km/h`;
  }
}
