import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomChatboxComponent } from './room-list/room-chatbox/room-chatbox.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: RoomListComponent },
  { path: ':room', component: RoomChatboxComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
