import { TaskModel } from './task.model';

export class ToDoListModel{
    public about:string=''
    public state:string='undefined'
    public date:string=''

    constructor(public name:string, public tasks:TaskModel[]){}
    
}

