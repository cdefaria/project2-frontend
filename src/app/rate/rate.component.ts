import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  article: Article;
  myRating: number;

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
