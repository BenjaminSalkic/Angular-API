import { CommonModule } from '@angular/common';
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../User';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{

  @Output() onAddUser:EventEmitter<User> = new EventEmitter;

  FirstName!:string;
  LastName!:string;
  Email!:string;

  constructor() {}

  ngOnInit(): void {
      
  }
  onSubmit(){
    if(!this.FirstName || !this.LastName || !this.LastName){
      alert("Please fill in all the boxes!")
      return;
    }

    const newUser:User ={

      FirstName:this.FirstName,
      LastName:this.LastName,
      Email:this.Email

      
    };
    this.onAddUser.emit(newUser);

    this.FirstName="";
    this.LastName="";
    this.Email="";
  }
}
