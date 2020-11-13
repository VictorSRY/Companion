import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ToDoListModel } from './todolist.model';
import { ilist, ToDoListService } from './todolist.service';

@Injectable({ providedIn: 'root' })

export class ToDoHttpService {

    constructor(private http: HttpClient, private listS: ToDoListService) { }

    addList(list: ToDoListModel) {
        return this.http.post<{ name: string }>('https://companionapp-project.firebaseio.com/todoList.json', list)
    }

    updateList(id:string,list:ilist) {
        this.http.put<{ name: string }>('https://companionapp-project.firebaseio.com/todoList' + id+ '.json', list).subscribe(data => {
            //this.listS.updateList(list)
            console.log('adding', data.name)
        })
    }

    getlist() {
        this.http.get<ilist>('https://companionapp-project.firebaseio.com/todoList.json')
            .subscribe(data => {
                console.log('get:',data)
                this.listS.setlist(data)
            })
    }
}