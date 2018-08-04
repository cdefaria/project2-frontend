import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  article: Article;

  constructor(private a : ArticlesService) { }

  ngOnInit() {
    this.article = JSON.parse(localStorage.getItem('article'));
    this.a.addArticle(this.article).subscribe(response => {
      console.log('Article: ' + this.article.title + ' added to DB');
    }, err => {
      console.log('Article: ' + this.article.title + ' already in DB');
    });
  }

}
