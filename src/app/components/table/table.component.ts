import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  messages: Message[];
  isVisible: boolean;

  
  constructor(private service: MessageService) { }

  ngOnInit() {
    this.getMensajes()
  }

  getMensajes(): void {
    this.service.getAll()
      .subscribe(data => this.messages = data);
  }

  showModal(): void {
    this.isVisible = !this.isVisible;
  }

  deleteMessage(id: string): void {
    console.log(id);

    this.service.destroy(id)
      .subscribe(() => {
        this.messages = this.messages.filter(item => item.id != id)
      })
  }

  editMessage(): void{
    this.showModal();
  }
}
