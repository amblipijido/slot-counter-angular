import { Injectable } from '@angular/core';
import {Driver } from '../model/driver'
import RaceDriverMock from '../mocks/RaceDriverMock.json';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor() { }

  public getAllDrivers(): Driver[] {
    return RaceDriverMock;
  }
}
