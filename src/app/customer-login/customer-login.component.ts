import { Component, OnInit } from '@angular/core';
import {UserAccountService} from 'src/app/user-account.service';
import {authIntercepter} from 'src/app/auth-intercepter'
import {Router} from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
login:any;
  constructor(private userService: UserAccountService, private _router:Router) { }

  ngOnInit(): void {
    this.login={
      username:'',
      password:''
    };
  
  }
  //login existing user
userLogin(){
  //console.log("inLogin")
  
  this.userService.loginRegistration(this.login).subscribe(response=>{
    console.log(response)    //Token will be received from server for authentication
    localStorage.setItem('token',response.access);
    this._router.navigate(['api/v1/yourCart'])

  },
  (error) => {                              //Error callback
    console.error(`unable to login ${error}`)
  }
   
    )
}



}
