import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../service/user/User.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: string = '';

  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe((name) => {
      console.log(name)
      this.user = name;
    });
  }

  logout(): void {
    this.userService.logout();
  }
}