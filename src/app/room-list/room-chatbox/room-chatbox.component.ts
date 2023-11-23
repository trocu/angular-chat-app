import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-chatbox.component.html',
  styleUrl: './room-chatbox.component.css',
})
export class RoomChatboxComponent {
  messages: object[] = [];

  getMessages() {
    console.log(this.messages);
  }
}
