import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<a routerLink="/">Home</a>`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
