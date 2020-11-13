import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ilist, ToDoListService } from '../shared/todolist.service';

@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.css']
})
export class TodayListComponent implements OnInit {

  list:ilist = {}
  listSub:Subscription

  constructor(private listS: ToDoListService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.listSub = this.listS.listUpdate.subscribe(list => {
      this.list = list
    })
    this.list = this.listS.todayList
    console.log("today",this.list)
  }

   ngOnDestroy(){
    this.listSub.unsubscribe()
  }
}
