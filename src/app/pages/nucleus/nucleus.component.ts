import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-nucleus',
  templateUrl: './nucleus.component.html',
  styleUrls: ['./nucleus.component.scss']
})
export class NucleusComponent implements OnInit {
  receivedMessages: string[] = [];

  myusername: string;

  constructor(private titleService: Title, private websocketService: WebsocketService) { }
  
  ngOnInit(): void {
    this.titleService.setTitle("Nucleus Management");

    this.websocketService.connect();
    this.websocketService.messageReceived.subscribe((message: string) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage(): void {
    let message = (<HTMLInputElement>document.getElementById("name")).value;
    if (message == "") {
      console.log("Message is empty!")
      return;
    }

    this.websocketService.sendMessage(message);
    (<HTMLInputElement>document.getElementById("name")).value = ""
  }
}
