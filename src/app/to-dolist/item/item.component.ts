import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from '../shared/task.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task:TaskModel
  @Input() tIndex:number
  @Input() lIndex:string = '0'
  @Input() edit:boolean=false
  @Input() progress:boolean=true
  @Output() rIndex = new EventEmitter<number>()
  colId:string='ItemDesc'

  constructor() { }

  ngOnInit(): void {
    this.colId = 'ItemDesc-' + this.lIndex+'-' + this.tIndex
    //console.log(this.colId,this.tIndex)
  }

  remove(){
    this.rIndex.emit(this.tIndex)
  }
  setState(state:string){
    this.task.state=state
  }
}
