import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';
import { RouterLink } from '@angular/router';
import { RoomChatboxComponent } from './room-chatbox/room-chatbox.component';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RoomChatboxComponent],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css',
})
export class RoomListComponent implements OnInit {
  user!: any;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.userName$.subscribe((name) => (this.user = name));
  }
}
