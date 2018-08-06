import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  article: Article;
  user: User;
  myRating: any;

  constructor(private a : ArticlesService, private u : UsersService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.article = JSON.parse(localStorage.getItem('article'));
  }

  addRating() {
    console.log('Rating: ' + this.myRating);
    this.u.updateRating(this.user.id, this.article.id, this.myRating).subscribe(response => {
      this.myRating = <any>response['rating'];
    }, err => {
      this.u.setRating(this.user.id, this.article.id, this.myRating).subscribe(response => {
        this.myRating = <any>response['rating'];
      });
    });
  }

}
