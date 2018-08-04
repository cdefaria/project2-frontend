import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser: User;
  loggedIn: Boolean = (this.loggedUser != null);
  logOut: Boolean = !this.loggedIn;
  link: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    if(this.loggedUser == null) {
      this.loggedIn = false;
      this.logOut = true;
    } else {
      this.loggedIn = true;
      this.logOut = false;
    }
  }

  ngDoCheck() {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    if(this.loggedUser == null) {
      this.loggedIn = false;
      this.logOut = true;
    } else {
      this.loggedIn = true;
      this.logOut = false;
    }
  }

  public login() {
    this.router.navigate(['login']);
  }

  public register() {
    this.router.navigate(['register']);
  }

  public logout() {
    console.log('In logout');
    localStorage.clear();
    this.loggedUser = null;
    this.router.navigate(['login']);
  }

  public quickLinks() {
    // localStorage.setItem('user', this.loggedUser);
    console.log('In quickLinks; link = ' + this.link);
    if(this.link == 1) {
      this.trends();
    } else if(this.link == 2) {
      this.search();
    } else if(this.link == 3) {
      this.interest();
    } else if(this.link == 4) {
      this.home();
    }
  }

  public trends() {
    this.router.navigate(['trends']);
  }

  public search() {
    this.router.navigate(['search']);
  }

  public interest() {
    this.router.navigate(['interests']);
  }

  public home() {
    this.router.navigate(['home']);
  }
}
