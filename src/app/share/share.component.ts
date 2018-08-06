import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Article } from '../article';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  toEmail: string;
  user: User;
  article: Article;

  constructor(private u : UsersService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.article = JSON.parse(localStorage.getItem('article'));
  }

  public send() {
    this.u.share(this.user.email, this.toEmail, this.article.title, this.article.url).subscribe(response => {
      console.log('Article shared');
    });
  }

}
