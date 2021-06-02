import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from  '@angular/common/http';
import { UserAccountService} from 'src/app/user-account.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,next:any){
    let authService = this.injector.get(UserAccountService) 
    let tokenizeReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }
}
