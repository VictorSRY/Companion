import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ilist, ToDoListService } from '../shared/todolist.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit, OnDestroy {

  datedlist:ilist = {}
  noDateList:ilist = {}
  listSub:Subscription

  constructor(private listS: ToDoListService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    /*this.listSub = this.listS.listUpdate.subscribe(list => {
      this.list = list
    })*/
    this.datedlist= this.listS.datedList
    this.noDateList= this.listS.noDateList
  }

  addList(){
    this.router.navigate(['../add'],{relativeTo:this.route,queryParams:{index:-1}})
  }

   ngOnDestroy(){
    //this.listSub.unsubscribe()
   }

}
