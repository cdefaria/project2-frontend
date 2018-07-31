import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { User } from './user';
import { environment } from '../environments/environment';

const options = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    let u = localStorage.getItem('user');
    if(u != '{}' && u != undefined) {
      this.subscribers.next(JSON.parse(u));
    }
   }

  public getUsers() {
    return this.http.get<User>(environment.apiUrl + 'users/1');
  }

  public login(user) {
    let u = JSON.stringify(user);
    console.log(u);
    return this.http.post(environment.apiUrl + '/login', u, options);
  }

  public register(user) {
    let u = JSON.stringify(user);
    console.log(u);
    return this.http.post(environment.apiUrl + '/register', u, options);
  }
}
