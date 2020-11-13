import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToDoHttpService } from '../to-dolist/shared/todohttp.service';
import { ToDoListService } from '../to-dolist/shared/todolist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userS:UserService,private http:ToDoHttpService) { }

  ngOnInit(): void {
    this.http.getlist()
    console.log('home')
    /*this.userS.initializeUser()*/
  }

}
