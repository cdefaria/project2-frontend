import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private u : UsersService) { }

  ngOnInit() {
  }

  public register() {
    this.u.register(this.user).subscribe(response => {
      this.user = <any>response["user"];
      console.log(this.user);
    });
  }

}
