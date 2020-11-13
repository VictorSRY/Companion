import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { AuthDataModel } from './auth.data.model';
import { LogInAuthService } from './login.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') login:NgForm
  type = "student"
  authData:AuthDataModel
  constructor(private loginS:LogInAuthService, private userS:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginS.authData.subscribe( data =>{
      this.authData = data
    }) 
  }

  logIn(){
    console.log(this.login.value.userid)
    this.loginS.login({email: this.login.value.userid, password: this.login.value.password}).subscribe( (data)=>{
      this.router.navigate([data.localId+'/todo/loadData'])
    } )
  }

  SignUp(){
    console.log("signUp")
    this.loginS.signUp({email: this.login.value.userid, password: this.login.value.password}).subscribe()
  }

}
