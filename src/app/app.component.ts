import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; 
import { AuthorizationComponent } from './components/authorization/authorization.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,UserComponent,HttpClientModule,AuthorizationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-api';
}
