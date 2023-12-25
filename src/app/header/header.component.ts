import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/user/User.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: string = '';
  user$: Observable<string> = this.userService.currentUser;
  dropdownOpen = false;
  constructor(public userService: UserService, private router: Router) {

  }

  ngOnInit(): void {

    this.userService.currentUser.subscribe((name) => {
      this.user = name;
    });


  }

  logout(): void {
    this.userService.logout();
  }
}