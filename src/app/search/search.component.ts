import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  searched: boolean;
  articles: Article[];

  constructor(private a : ArticlesService, private router: Router) { }

  ngOnInit() {
    this.searched = true;
  }

  public search() {
    this.a.searchResults(this.query).subscribe(response => {
      this.articles = <any>response["articles"];
      console.log(this.articles);
      this.searched = false;
    });
  }

}
