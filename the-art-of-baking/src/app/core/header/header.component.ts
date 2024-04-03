import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(
    private userService: UserService,
    private router: Router
  ) { 

  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get user (){
  return this.userService.user;
  }

//  currentUser() {
//     console.log(this.userService.user);
    
//     return this.userService.user ;
  
//   }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

}
