import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { User } from '../user';
import { ArticlesService } from '../articles.service';
import { UsersService } from '../users.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  article: Article;
  user: User;
  comments: Comment[] = new Array();;
  comment: string;
  authors: User[];

  constructor(private a : ArticlesService, private u : UsersService, private router: Router) { }

  ngOnInit() {
    this.article = JSON.parse(localStorage.getItem('article'));
    this.user = JSON.parse(localStorage.getItem('user'));
    this.a.addArticle(this.article).subscribe(response => {
      this.article.id = response['articleId'];
      localStorage.setItem('article', JSON.stringify(this.article));
      console.log('Article: ' + JSON.stringify(this.article) + ' added to DB');
    }, err => {
      console.log('Article: ' + this.article.title + ' already in DB');
    });
    this.u.getComments(this.user.id).subscribe(response => {
      this.comments = <any>response;
      console.log('Comments: ' + JSON.stringify(this.comments));
    });
  }

  public add() {
    this.u.addComment(this.user.id, this.article.id, this.comment).subscribe(response => {
      this.u.getComments(this.user.id).subscribe(response => {
        this.comments = <any>response;
      }, err => {

      });
    });
  }

  public favorite() {
    this.u.addFavorite(this.user.id, this.article.id).subscribe(response => {
      alert('Added article: ' + this.article.title + ' to your favorites');
    });
  }

  public rate() {
    this.router.navigate(['rates']);
  }

  public share() {
    this.router.navigate(['shares']);
  }

}
