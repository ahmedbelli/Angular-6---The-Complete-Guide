import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  ithNumber: number = 0;

  constructor() {}

  ngOnInit() {}

  onStart() {
    let that = this;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.ithNumber + 1);
      this.ithNumber += 1;
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
