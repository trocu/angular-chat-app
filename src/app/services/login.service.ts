import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userName = new BehaviorSubject<User>({name: ''});
  userName$ = this.userName.asObservable();

  constructor() {}

  setName(name: User) {
    localStorage.setItem('user_name', JSON.stringify(name));
    this.userName.next(name);
  }
}
