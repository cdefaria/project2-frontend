import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];//this.a.getTrendingArticles();

  constructor(private a : ArticlesService) { }

  ngOnInit() {
    this.a.getTrendingArticles().subscribe(response => {
      this.articles = <any>response["articles"];
      console.log(this.articles);
    });
  }

}
