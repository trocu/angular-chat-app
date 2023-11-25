import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Message } from '../../shared/interfaces/message.interface';
// import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-room-chatbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room-chatbox.component.html',
  styleUrl: './room-chatbox.component.css',
})
export class RoomChatboxComponent implements OnInit {
  messages: Message[] = [];
  form!: FormGroup;
  user!: any;

  constructor(
    private loginService: LoginService // private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // this.apiService.get().subscribe({
    //   next: (messages) => {
    //     console.log(messages);
    //   },
    // });
    this.loginService.userName$.subscribe((name) => {
      this.user = name;
    });
    this.form = new FormGroup({
      message: new FormControl<string>(''),
    });
  }
  onSubmit(form: FormGroup) {
    this.messages.push({ ...this.user, ...form });
    console.log(this.messages);

    // console.log({ ...this.user, ...form });
  }
}
