import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { User } from '../user';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  article: Article;
  comments: Comment[];
  authors: User[];

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
