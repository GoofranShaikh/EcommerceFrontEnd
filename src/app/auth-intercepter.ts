import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from  '@angular/common/http';
import { UserAccountService} from 'src/app/user-account.service'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class authIntercepter implements HttpInterceptor{

  constructor(private authService:UserAccountService) { }
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
 
    let tokenizeReq=req.clone({
        setHeaders:{
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })

    if(localStorage.getItem('token')===null){
      console.log('absent')
       
    let tokenizeReq=req.clone({
      setHeaders:{
        'Content-Type': 'application/json',
         
         }

 
  })
  return next.handle(tokenizeReq)
    }
  
 
    return next.handle(tokenizeReq)
  }
}
