import { DatePipe } from '@angular/common';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

import { ToDoListModel } from "./todolist.model"

export interface ilist{
    [id:string]:ToDoListModel;
}

@Injectable({providedIn:'root'})

export class ToDoListService{
    
    private list:ilist={}
    todayList:ilist={}
    datedList:ilist={}
    noDateList:ilist={}
    progressList:ilist={}
    completed:ilist={}


    listUpdate = new BehaviorSubject<ilist>(null)

    todayListUpdate = new BehaviorSubject<ilist>(null)
    datedListUpdate = new BehaviorSubject<ilist>(null)
    noDateListUpdate = new BehaviorSubject<ilist>(null)
    progressListUpdate = new BehaviorSubject<ilist>(null)
    completedUpdate = new BehaviorSubject<ilist>(this.completed)

    constructor(private datePipe:DatePipe){}

    public addList(id:string,list:ToDoListModel){
        this.list[id] = list
        this.listCheck(id,list)
        this.sendUpdate()
    }

    public getlistItem(id:string){
        return this.list[id]
    }

    public removeListItem(id:string){
        delete this.list[id]
    }

    public setlist(list){
        this.list = list
        this.listUpdate.next(list)
        this.listSort()
        this.sendUpdate()
    }

    getList(){
        return this.list
    }


    private listSort(){
        for(let item in this.list){
            //console.log(this.list[item])
           this.listCheck(item,this.list[item])
        }
    } 

    private listCheck(id:string, list:ToDoListModel){
        //console.log(list.date,list.state)
        if(list.date===''){
            this.noDateList[id]=list
            //console.log('nodate')
        }
        else{
            this.datedList[id]=list
            //console.log('date')
            //console.log(list.date,new Date().toLocaleDateString())
            if(list.date === new Date().toLocaleDateString()){
                this.todayList[id]=list
                //console.log('today')
            }
        }
        if(list.state==='done'){
            this.completed[id]=list
            //console.log('com')
        }
        else if(list.state==='doing'){
            this.progressList[id]=list
            //console.log('pro')
        }
    }

    private sendUpdate(){
        this.todayListUpdate.next(this.todayList)
        this.noDateListUpdate.next(this.noDateList)
        this.datedListUpdate.next(this.datedList)
        this.completedUpdate.next(this.completed)
        this.progressListUpdate.next(this.progressList)
    }
}