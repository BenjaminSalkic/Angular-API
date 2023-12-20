import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'localstorage-polyfill'

global['localStorage'] = localStorage;

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {

  @Output() LoadUser:EventEmitter<Boolean> = new EventEmitter;

  constructor() {}

  authorization: string = '';
  authCode: string | null = null;

  saveString(): void {
      localStorage.setItem('authCode', this.authorization);
      this.authCode = this.authorization;

      this.LoadUser.emit(true);
  }

}
