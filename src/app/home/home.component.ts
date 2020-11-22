import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Event } from '../model/event';
import { Message } from '../model/message';
import {WebSocketSubject} from 'rxjs/webSocket';
import { Lap } from '../model/lap';
import { Race } from '../model/race';

import RaceMock from '../mocks/RaceMock.json';
import { Line } from '../model/line';
import { Car } from '../model/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  race: Race;
  myWebSocket: WebSocketSubject<Message>;
  action = null;
  messageContent = '';
  connected: boolean;
  tryConnection: boolean;

  constructor(private socketService: WebsocketService) {
    this.race = RaceMock;
    this.connected = false;
    this.tryConnection = false;
    this.myWebSocket = socketService.init();
  }

  public connect(): void {
    this.tryConnection = true;
    if (this.connected) {
      this.myWebSocket.complete();
      this.connected = false;
      this.tryConnection = false;
    } else {
      this.suscribeToMessages();
    }
  }

  public suscribeToMessages(): void {
    this.myWebSocket.subscribe(
      msg => this.manageMessage(msg),
      err => {
        console.log('ERROR: ' + err);
        this.tryConnection = false;
      },
      () => this.connected = false
    );
  }

  private manageMessage(message: Message): void {
    switch (message.event) {
      case Event.CONNECTION:
        this.connected = message.content === 'connected' ? true : false;
        this.tryConnection = false;
        break;
      case Event.LAP:
        this.manageLap(message.content);
        break;
      case Event.REFUELING:
        const raceLine = this.obtainRaceLine(message.content);
        if (raceLine) {
          this.refuel(raceLine);
        }
    }
  }

  private obtainRaceLine(eventLineNumber: number): Line | undefined {
    return this.race.lines.find(line => line.lineNumber === eventLineNumber);
  }

  private manageLap(lap: Lap): void {
    const raceLine = this.obtainRaceLine(lap.line.lineNumber);
    if (raceLine && raceLine.raceCar.fuelRemaining > 0) {
      lap.line = raceLine;
      if (this.calculateBestLap(raceLine, lap)) {
        raceLine.bestLap = lap.lapTime;
      }
      raceLine.raceCar.fuelRemaining = this.adjustFuelRemaining(raceLine.raceCar);
      raceLine?.laps.push(lap);
    }
  }

  private calculateBestLap(line: Line, lap: Lap): boolean {
    if (line.bestLap) {
      return lap.lapTime <= line.bestLap;
    } else {
      return true;
    }
  }

  private adjustFuelRemaining(car: Car): number {
    return car.fuelRemaining - car.fuelConsumption;
  }

  private refuel(line: Line): void {
    line.raceCar.fuelRemaining += 1;
  }
}
