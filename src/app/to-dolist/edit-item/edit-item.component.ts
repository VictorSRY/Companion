import { Location } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskModel,time } from '../shared/task.model';
import { ToDoHttpService } from '../shared/todohttp.service';
import { ToDoListModel } from '../shared/todolist.model';
import { ToDoListService } from '../shared/todolist.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  index:string
  edit:boolean=false
  @ViewChild('editItem') form:NgForm
  name:string=''
  dated:boolean=false
  about:string=''
  date:string=null
  taskName:string=''
  taskTime:string=null
  taskDesc:string=''
  formData:ToDoListModel

  tasks:TaskModel[]=[]

  constructor(private route:ActivatedRoute, private listS:ToDoListService, private http:ToDoHttpService, private _local:Location) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.queryParams['index']
    if(this.index!=='-1'){
      this.formData=this.listS.getlistItem(this.index)
      this.name=this.formData.name
      this.about=this.formData.about
      if(this.formData.date==""){
        this.dated=true
        this.date=this.formData.date
      }
      this.tasks=this.formData.tasks
    }
  }

  addTask(){
    this.taskTime = this.form.value.taskTime
    this.taskDesc = this.form.value.taskDesc
    console.log('adding: name-', this.taskName,' desc-"',this.taskDesc,'" state- unknown taskTime-', this.taskTime )
    const taskId:number=this.tasks.push(new TaskModel(this.taskName))-1
    this.taskTime=this.form.controls['taskTime'].value
    if(this.taskTime){
      this.tasks[taskId].time = {hour:parseInt(this.taskTime.split(':')[0]),minute:parseInt(this.taskTime.split(':')[1])}
    }
    this.tasks[taskId].description=this.taskDesc
    this.reset()
  }

  removeTask(index){
    this.tasks.splice(index,1)
  }

  reset(){
    this.taskName=''
    this.taskDesc=''
    this.taskTime=null
    this.form.controls['taskTime'].reset()
  }

  submit(){
    console.log(typeof(this.date))
    if(this.edit){
      if(this.date) this.formData.date=new Date(this.date).toLocaleDateString()
      this.http.updateList(this.index,{index:this.formData})
    }
    else{
      const list = new ToDoListModel(this.name,this.tasks)
      list.about=this.about
      if(this.date) list.date=new Date(this.date).toLocaleDateString()
      this.http.addList(list).subscribe(data=>{
        this.listS.addList(data.name,list)
    })
    }
  }

  getdata(){
    this.http.getlist()
  }

  goBack(){
    this._local.back()
  }

  test(){
    //console.log( new Date().toLocaleTimeString(),this.tasks[0].time.hour)
    this.http.getlist()
  }

}
