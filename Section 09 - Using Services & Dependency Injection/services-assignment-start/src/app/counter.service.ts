import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeTriggered = 0;
  inactiveTriggered = 0;

  constructor() {}

  onTriggerInactive() {
    this.inactiveTriggered += 1;
    console.log('Inactive triggered ' + this.inactiveTriggered + ' times.');
  }

  onTriggerActive() {
    this.activeTriggered += 1;
    console.log('Active triggered ' + this.activeTriggered + ' times.');
  }
}
