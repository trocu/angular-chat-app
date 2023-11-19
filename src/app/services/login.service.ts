import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userName = new BehaviorSubject<object>({});
  userName$ = this.userName.asObservable();

  constructor() {}

  setName(name: object) {
    this.userName.next(name);
  }
}
