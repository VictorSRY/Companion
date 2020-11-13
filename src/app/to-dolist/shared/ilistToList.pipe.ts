import { Pipe, PipeTransform } from '@angular/core';
import { ToDoListModel } from './todolist.model';
import { ilist } from './todolist.service';

@Pipe({name: 'mapToList'})
export class MapToList implements PipeTransform {
  transform(value, args:string[]) : any[] {
    let arr = [];
    for (let key in value) {
      arr.push({id:key,value:value[key]});
    }
    return arr;
  }
}