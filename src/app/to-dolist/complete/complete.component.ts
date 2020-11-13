import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ilist, ToDoListService } from '../shared/todolist.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  list:ilist={}
  sub:Subscription

  constructor(private listS:ToDoListService) { }

  ngOnInit(): void {
    this.sub=this.listS.completedUpdate.pipe().subscribe(list=>{
      this.list=list
    })
  }

}
