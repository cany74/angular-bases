import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public defaultName: string = "Iroman";
  public defaultAge: number = 45;

  public name: string = this.defaultName;
  public age : number = this.defaultAge;

  get capitalizeName():string {
    return this.name.toUpperCase();
  };

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  };

  changeName(newName: string):void {
    if (newName === this.name)
      return;
    this.name = newName;
  };

  changeAge(newAge: number):void {
    this.age = newAge;
  };

  isChanged(): boolean {
    if (this.name !== this.defaultName)
      return true;
    if (this.age !== this.defaultAge)
      return true;
    return false;
  };

  reset():void {
    this.changeName(this.defaultName);
    this.changeAge(this.defaultAge);
  };
}
