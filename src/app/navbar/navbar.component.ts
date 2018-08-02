import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser = JSON.parse(localStorage.getItem('user'));
  loggedIn: Boolean = (this.loggedUser != null);
  logOut: Boolean = !this.loggedIn;
  link: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }

  public login() {
    this.router.navigate(['login']);
  }

  public register() {
    this.router.navigate(['register']);
  }

  public logout() {
    console.log('In logout');
    localStorage.setItem('user', null);
    this.loggedUser = null;
    this.router.navigate(['login']);
  }

  public quickLinks() {
    switch(this.link) {
      case 0:
        break;
      case 1:
        this.trends();
        break;
      case 2:
        this.search();
        break;
      case 3:
        this.home();
        break;
      default:
        console.log('Invalid input');
    }

  }

  public trends() {
    this.router.navigate(['trends']);
  }

  public search() {
    this.router.navigate(['search']);
  }

  public home() {
    this.router.navigate(['home']);
  }
}
