import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [];

  constructor() {
   this.characters.push({
      id: uuid(),
      name: "Krillin",
      power: 1000
   });
   this.characters.push({
    id: uuid(),
     name: "Gdku",
     power: 9501
   });
   this.characters.push({
    id: uuid(),
     name: "Spiderman",
     power: 15
   });
 };

 public addCharacter(character: Character): void {
  const newCharacter: Character = {
    id: uuid(),
    ...character
  };
  this.characters.push(newCharacter);
 };

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character=> character.id !== id);
  };
}
