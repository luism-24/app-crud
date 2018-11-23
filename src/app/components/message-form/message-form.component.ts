import { Component, OnInit, EventEmitter  } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messages: Message[];
  propagar = new EventEmitter<Message>(); 

  constructor(private service: MessageService){}

  ngOnInit(){
    this.getMensajes()
  }

  getMensajes(): void {
     this.service.getAll()
      .subscribe(data => this.messages = data);
  }

}
