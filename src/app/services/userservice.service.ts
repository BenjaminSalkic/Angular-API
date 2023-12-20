import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { useri } from '../useri';
import 'localstorage-polyfill'

global['localStorage'] = localStorage;

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  private api='https://api4.allhours.com/api/v1/users/';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{

    const authCode = localStorage.getItem('authCode');
    const Auth = "Bearer "+ authCode;

    const head = new HttpHeaders({
      'Authorization': Auth,
      'Content-Type': 'application/json',
    });
    return this.http.get<User[]>(this.api, { headers: head });
  }

  addUser(user: User):Observable<User>{

    const authCode = localStorage.getItem('authCode');
    const Auth = "Bearer "+ authCode;

    const head = new HttpHeaders({
      'Authorization': Auth,
      'Content-Type': 'application/json',
    });
    return this.http.post<User>(this.api,user,{ headers: head});
  }
}
