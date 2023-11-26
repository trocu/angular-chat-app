import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const USER_NAME = 'user_name';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userName = new BehaviorSubject<object>({});
  userName$ = this.userName.asObservable();

  constructor() {}

  setName(name: object) {
    this.userName.next(name);
    localStorage.setItem(USER_NAME, JSON.stringify(this.userName.value));
  }
}
