import { Injectable } from '@angular/core';
import { SpeedWay } from '../model/speed-way';
// FIXME When the services are fully implemented
import SpeedWayMock from '../mocks/SpeedWayMock.json';

@Injectable({
  providedIn: 'root'
})
export class SpeedwayService {

  constructor() { }

  public getAllSpeedWays(): SpeedWay[] {
    return SpeedWayMock;
  }
}
