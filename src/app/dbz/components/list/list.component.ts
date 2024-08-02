import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  // public onDelete:  EventEmitter<number> = new EventEmitter();
  public onDelete:  EventEmitter<string> = new EventEmitter();

    @Input()
    public characterList:Character[] = [{
      // id: uuid(),
      name:'Trunk',
      power:10
    }]


    // onDeleteCharacter(index: number): void{
    onDeleteCharacter(id?: string): void{
      // TODO: Emitir el ID del personaje
      // console.log({index});
      if(!id) return;// si el id es nulo retorna nada
      this.onDelete.emit(id);
    }
}
