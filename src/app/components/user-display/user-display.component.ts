import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { User} from '../../User';
import { UserItemComponent } from '../user-item/user-item.component';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from '../add-user/add-user.component';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-user-display',
  standalone: true,
  imports: [UserItemComponent,CommonModule,AddUserComponent,AuthorizationComponent],
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.css'
})
export class UserDisplayComponent implements OnInit {

  Users: User[] = [];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
  }

  loadUser(a: boolean){
      this.userService.getUsers().subscribe((Users) =>this.Users = Users);
      console.log("Radii")
  }

  AddUser(user: User){
    this.userService.addUser(user).subscribe((user)=>(this.Users.push(user)));

  }

}
