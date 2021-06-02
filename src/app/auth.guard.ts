import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {UserAccountService } from 'src/app/user-account.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private _authService:UserAccountService,private _router:Router){}

canActivate():boolean{
 
  if (this._authService.loggedIn()){
    return true
  }
  else{
    this._router.navigate(['http://localhost:4200/api/v1/login'])

    return false
  }
}
  
}
