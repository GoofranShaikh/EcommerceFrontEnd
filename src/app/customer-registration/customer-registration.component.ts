import { Component, OnInit } from '@angular/core';
import {UserAccountService} from 'src/app/user-account.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  register:any;
  constructor(private userService: UserAccountService) { }

  ngOnInit(): void {
    this.register={
      username:'',
      email:'',
      password:''
    
    };
  }
  userRegistration(){
    console.log("inRegister")
    console.log(this.register)
    this.userService.userRegistration(this.register).subscribe(response=>{
      console.log(response)
    })
  }
}
