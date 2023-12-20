import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../User';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {
      
  }

}
