import { Component, OnInit } from '@angular/core';
import { Interest } from '../interest';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: Interest[];
  interest: string;
  user = localStorage.getItem('user')

  constructor(private i : InterestsService) { }

  ngOnInit() {
    this.i.getUserInterests(this.user).subscribe(response => {
      this.interests = <any>response["interests"];
    });
  }

  public add() {
    let temp: Interest;
    temp.interest = this.interest;
    this.i.addInterest(this.user, temp);
    this.i.getUserInterests(this.user).subscribe(response => {
      this.interests = <any>response["interests"];
    });
  }

}
