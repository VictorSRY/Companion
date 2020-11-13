import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { } 

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['../'],{relativeTo:this.route})
    }, 1000);
  }

}
