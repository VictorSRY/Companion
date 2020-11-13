import { Time } from '@angular/common';

export interface time{
    hour:number,
    minute:number
}

export class TaskModel {
    public state:string='undefined'
    public description:string=''
    public time:time
    constructor(public name:string){
    }
 }
