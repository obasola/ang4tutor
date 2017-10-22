import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson31',
  templateUrl: './lesson31.component.html',
  styleUrls: ['./lesson31.component.css']
})
export class Lesson31Component implements OnInit {
  showSecret = false;
  log = [];
  logFile = '';
  clickCounter = 0;

  constructor() {}

  ngOnInit() {
  }

  changeBg() {
    if (this.log.length > 5) {
      return true;
    }
    return false;
  }
  onButtonClick() {
    this.showSecret = true;
    this.clickCounter++;
    // this.log.push(this.clickCounter);
    this.log.push(new Date());
  }
}