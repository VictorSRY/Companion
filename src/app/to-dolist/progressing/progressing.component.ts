import { Component, OnInit } from '@angular/core';
import { ilist, ToDoListService } from '../shared/todolist.service';

@Component({
  selector: 'app-progressing',
  templateUrl: './progressing.component.html',
  styleUrls: ['./progressing.component.css']
})
export class ProgressingComponent implements OnInit {

  list:ilist={}

  constructor(private listS:ToDoListService) { }

  ngOnInit(): void {
    this.list=this.listS.progressList
  }

}
