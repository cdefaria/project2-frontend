import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.loggedUser === null) {
      this.router.navigate(['login']);
    } 
  }

  public logout() {
    localStorage.setItem('user', '');
    this.loggedUser = null;
    this.router.navigate(['login']);
  }

}
