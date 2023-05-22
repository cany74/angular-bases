import { Component } from '@angular/core';

const defaultNumber: number = 1404;

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter111: {{counter}}</p>
    <button (click)="increaseBy();">+1</button>
    <button (click)="decreaseBy();">-1</button>
    <button (click)="reset();">Reset</button>
  `
})

export class CounterComponent  {
  constructor() { }
  public counter: number = defaultNumber;
  increaseBy():void {
    this.counter++;
  };
  decreaseBy():void {
    this.counter--;
  };
  reset():void {
    this.counter = defaultNumber;
  };
}
