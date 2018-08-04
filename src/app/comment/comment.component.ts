import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { User } from '../user';
import { ArticlesService } from '../articles.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  article: Article;
  user: User;
  comments: Comment[];
  comment: string;
  authors: User[];

  constructor(private a : ArticlesService, private u : UsersService) { }

  ngOnInit() {
    this.article = JSON.parse(localStorage.getItem('article'));
    this.user = JSON.parse(localStorage.getItem('user'));
    this.a.addArticle(this.article).subscribe(response => {
      this.article.id = response['articleId'];
      console.log('Article: ' + JSON.stringify(this.article) + ' added to DB');
    }, err => {
      console.log('Article: ' + this.article.title + ' already in DB');
    });
  }

  public add() {

  }

  public favorite() {
    this.u.addFavorite(this.user.id, this.article.id).subscribe(response => {
      alert('Added article: ' + this.article.title + ' to your favorites');
    });
  }

}
