import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Event } from '../model/event';
import { Message } from '../model/message';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myWebSocket: WebSocketSubject<Message>;
  action = null;
  messages: Message[] = [];
  messageContent = '';
  connected: boolean;
  tryConnection: boolean;

  constructor(private socketService: WebsocketService) {
    this.connected = false;
    this.tryConnection = false;
    this.myWebSocket = socketService.init();
  }

  ngOnInit(): void {
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
      msg => {
        if (msg.content === 'connected') {
          this.connected = true;
          this.tryConnection = false;
        } else {
          this.messages.push(msg);
        }
      },
      err => {
        console.log('ERROR: ' + err);
        this.tryConnection = false;
      },
      () => this.connected = false
    );
  }
}
