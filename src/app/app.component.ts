import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'restApiFront';

  date: Number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }
}
