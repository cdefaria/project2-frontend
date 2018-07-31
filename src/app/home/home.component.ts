import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  user = localStorage.getItem('user');

  constructor(private a : ArticlesService, private i : InterestsService) { }

  ngOnInit() {
    // this.i.getUserInterests(this.user).subscribe(intResponse => {
    //   if(intResponse == null) {
        this.a.getTrendingArticles().subscribe(response => {
          this.articles = <any>response["articles"];
          console.log(this.articles);
        });
    //   }
    // });
  }

}
