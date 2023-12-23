import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [HeaderComponent, RouterModule]
})
export class HomepageComponent {

  date: Number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
