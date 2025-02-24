import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUser, UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  userActive: boolean = false

  users: IUser[] = []



  constructor(private userService: UserService){
      this.users = this.userService.getUsers()
  }

}
