import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

// console.log(uuid());

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:'Krilin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegeta',
    power:7500
  }];

  addCharacter( character: Character): void{
    // console.log('MainPage');
    // console.log(character);
    // const newCharacter: Character = {id:uuid(), ...character};
    const newCharacter: Character = {...character, id:uuid()};
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void{
  //   this.characters.splice(index,1);
  DeleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
    console.log(this.characters);

  }

}
