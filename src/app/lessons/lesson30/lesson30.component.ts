import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson30',
  templateUrl: './lesson30.component.html',
  styleUrls: ['./lesson30.component.css']
})
export class Lesson30Component implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  canEnableResetBtn() {
    let canEnable = false;
    if (this.userName.length > 0) {
      canEnable = true;
    }
    return canEnable;
  }

  onResetClicked(event: Event) {
    this.userName = '';
  }
}
