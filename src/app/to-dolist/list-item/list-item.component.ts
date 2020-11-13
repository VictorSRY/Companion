import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToDoListModel } from '../shared/todolist.model';
import { ilist } from '../shared/todolist.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() index:number
  @Input() item:{id:string,value:ToDoListModel}
  @Input() today:boolean = false
  @Input() open:boolean = false
  @Input() edit:boolean = true
  @ViewChild('listcol') col:ElementRef

  constructor() { 
    /*console.log(this.today , this.index===0)
    if(this.today && this.index===0){
      this.col.nativeElement.class.classlist.add('show')
    }*/
  }

  ngOnInit(): void {

  }
  removeTask(index:number){
    this.item.value.tasks.splice(index,1)
  }
  setState(state:string){
    this.item.value.state = state
  }
}
