import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Message } from '../model/message';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  myWebSocket: WebSocketSubject<Message> = webSocket('ws://192.168.0.36:81');
  status = false;

  constructor() {}

  public init(): WebSocketSubject<Message> {
      return this.myWebSocket;
  }
}
