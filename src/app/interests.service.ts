import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { Interest } from './interest';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
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
export class InterestsService {

  subscribers: BehaviorSubject<Interest[]> = new BehaviorSubject<Interest[]>(null);

  constructor(private http: HttpClient) { }

  public getUserInterests(user) {
    console.log('User: ' + JSON.stringify(user));
    let u = '["' + user.id + '"]';
    console.log('Request: ' + u);
    return this.http.post(environment.apiUrl + 'interests/get', u, options);
  }

  public addInterest(user, interest) {
    let json = '["' + user.id + '", "' + interest + '"]'
    return this.http.post(environment.apiUrl + 'interests', json, options);
  }
}
