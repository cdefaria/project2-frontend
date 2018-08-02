import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  loggedUser = localStorage.getItem('user');
  isValid: boolean = true;

  constructor(private u : UsersService, private router: Router) { }

  ngOnInit() {
    this.loggedUser = localStorage.getItem('user');
    // if(this.loggedUser != null) {
    //   this.router.navigate(['home']);
    // }
  }

  public register() {
    this.u.register(this.user).subscribe(response => {
      if(response == null) {
        this.user.password='';
        this.isValid = !this.isValid;
        alert("Invalid Username/Password");
      } else {
        this.loggedUser = <any>response["user"];
        localStorage.setItem('user', JSON.stringify(this.loggedUser));
        console.log(this.loggedUser);
        this.router.navigate(['home']);
      }
    });
  }

}
