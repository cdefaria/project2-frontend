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
    // console.log(u);
    return this.http.post(environment.apiUrl + 'login', u, options);
  }

  public register(user) {
    let u = JSON.stringify(user);
    // console.log(u);
    return this.http.post(environment.apiUrl + 'users', u, options);
  }

  public addFavorite(user, article){
    let json = '["' + user +  '", "' + article + '"]';
    // console.log(json);
    return this.http.post(environment.apiUrl + 'users/add-favorite', json, options);
  }

  public getFavorites(user) {
    let json = '["' + user +  '"]';
    // console.log(json);
    return this.http.post(environment.apiUrl + 'users/favorites', json, options);
  }

  public addComment(user, article, comment) {
    let json = '["' + user + '", "' +
        article + '", "' + comment + '"]';
    console.log(json);
    return this.http.post(environment.apiUrl + 'comments', json, options);
  }

  public getComments(id) {
    let json = '["' + id + '"]';
    console.log('Testing: ' + json);
    return this.http.post(environment.apiUrl + 'comments/get', json, options);
  }
}
