import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { ToDoHttpService } from './shared/todohttp.service';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDolistComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private http:ToDoHttpService) { }

  ngOnInit(): void {
    /*if(this.router.url.endsWith('todo')){
      this.router.navigate(['dashboard'],{relativeTo:this.route})
    }*/
    console.log('todohome')
  }
}
