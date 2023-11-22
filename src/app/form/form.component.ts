import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  user!: any;

  constructor(
    private loginService: LoginService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.get().subscribe({
      next: (messages) => {
        console.log(messages);
      },
    });
    this.loginService.userName$.subscribe((name) => {
      this.user = name;
    });
    this.form = new FormGroup({
      message: new FormControl<string>(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log({ ...this.user, ...form });
  }
}
