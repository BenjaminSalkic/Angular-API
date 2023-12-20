import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { ButtonComponent } from '../button/button.component';
import { UserDisplayComponent } from '../user-display/user-display.component';
import { AuthorizationComponent } from '../authorization/authorization.component';
import { User } from '../../User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ButtonComponent,UserDisplayComponent,AuthorizationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private userService: UserserviceService) {}  

  Users: User[] = [];
  title='Users'

  ngOnInit(): void {
      
  }

  loadUser(a: boolean){
    this.userService.getUsers().subscribe((Users) =>this.Users = Users);
    console.log("Radii")
}

  toggleAdd(){
    console.log("MJAU")
  }

}
