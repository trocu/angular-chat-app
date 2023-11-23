import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
