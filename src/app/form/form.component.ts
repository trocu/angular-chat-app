import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

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

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.userName$.subscribe((name) => {
      this.user = name;
    });
    this.form = new FormGroup({
      message: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log({ ...this.user, ...form });
  }
}
