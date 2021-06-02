import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
readonly  usersAccount= "http://127.0.0.1:8000/api/v1/";

  constructor(private http:HttpClient) { }



  userRegistration(user:any):Observable<any>{
    return this .http.post<any>(this.usersAccount +'usersAccount/' ,user)
  }

  loginRegistration(login:any):Observable<any>{
    return this .http.post<any>(this.usersAccount +'token/',login)
  }

  //using loggedIn method in auth guard for controlling the routes
  loggedIn(){
    return  !!localStorage.getItem('token')   //  '!!' return boolean true if token exisist in localstorage else return false
  }

  getToken(){
    return localStorage.getItem('token')
  }

  
}
