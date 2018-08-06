import { Component, OnInit } from '@angular/core';
import { Interest } from '../interest';
import { InterestsService } from '../interests.service';
import { User } from '../user';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: any[] = new Array<any>();
  interest: string;
  user: User;

  constructor(private i : InterestsService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.i.getUserInterests(this.user).subscribe(response => {
      this.interests = <any>response;
      console.log('Interests: ' + JSON.stringify(this.interests));
    });
  }

  public add() {
    this.i.addInterest(this.user, this.interest).subscribe(response => {
      this.i.getUserInterests(this.user).subscribe(response => {
        this.interests = <any>response;
        console.log('Interests: ' + JSON.stringify(this.interests));
      });
    });
    // this.i.getUserInterests(this.user).subscribe(response => {
    //   this.interests = <any>response["interests"];
    // });
  }

}
