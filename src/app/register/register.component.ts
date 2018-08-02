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

  user: User = new User();
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
      console.log(response);
      console.log('User successfully created');
      this.router.navigate(['login']);
      // if(response[] == 201) {}
    }, err => {
      alert('Unable to create user: ' + this.user.username);
    });
  }

}
