import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Profile } from 'src/app/types/profile';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileData: Profile = {
    username: '',
    email: '',
  }

  constructor(private userService: UserService){}

  ngOnInit(): void {

    const { username, email } = this.userService.user!;
    this.profileData = { username, email };
  }
}
