import { Pipe, PipeTransform } from '@angular/core';
import { Lap } from '../model/lap';

@Pipe({name: 'lapTime'})
export class LapTimePipe implements PipeTransform {
  transform(value: Lap): string {
    const lapTimeInSeconds = value.lapTime / 1000;
    return `${value.lapNumber} - Time: ${lapTimeInSeconds.toFixed(3)} seg.`;
  }
}
