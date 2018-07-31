import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private u : UsersService) { }

  ngOnInit() {
  }

  login() {
    this.u.login(this.user).subscribe(response => {
      this.user = <any>response["user"];
      console.log(this.user);
    });
  }

}
