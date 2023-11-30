import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';
import { RouterLink } from '@angular/router';
import { RoomChatboxComponent } from './room-chatbox/room-chatbox.component';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RoomChatboxComponent],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css',
})
export class RoomListComponent implements OnInit {
  user!: User;
  userData!: User;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.userName$.subscribe({
      next: (name) => {
        this.user = name;
        console.log('room list', this.user);
      },
    });
    // const storedData = localStorage.getItem('user_name');
    // this.userData = JSON.parse(storedData!) ?? { name: '' };
  }
}
