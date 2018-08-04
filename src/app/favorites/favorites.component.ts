import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  articles: Article[];
  user: User;

  constructor(private a : ArticlesService, private u : UsersService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.u.getFavorites(this.user.id).subscribe(response => {
      this.articles = <any>response;
      console.log('Response:' + JSON.stringify(this.articles));
    });
  }

}
