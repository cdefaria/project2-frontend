import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = this.u.getUsers();
  userStr = JSON.stringify(this.user);

  constructor(private u : UsersService) { }

  ngOnInit() {
    this.u.getUsers().subscribe(users => {
      this.u.subscribers.next(users);
      this.userStr = JSON.stringify(users);
    })
  }



}
