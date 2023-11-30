import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^(?!.*\\.\\.)(?!.*\\.$)[^\\W][\\w.]{3,29}$'),
      ]),
    });
  }

  onSubmit(form: User) {
    this.loginService.setName(form);
    this.router.navigate(['/chat']);
  }
}
