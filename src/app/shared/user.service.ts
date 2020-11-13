import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthDataModel } from '../login/auth.data.model';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User

  constructor(private http:HttpClient) { }

  initializeUser(authData){
    
    console.log(environment.dbLink+'/user/'+authData.userId+'.json')
    this.http.get(environment.dbLink+'/user/'+authData.userId+'.json'/*,{user:'vvk'}).pipe(tap( event=>{
      console.log(event)
    })*/).subscribe( data=>{
      if(data===null){
        this.user=null
      }
    } )
  }

  get userData(){
    return this.user
  }

}
