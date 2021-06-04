import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCart } from './add-to-cart';
import { CommonService } from './common.service';
import {UserAccountService} from './user-account.service';


  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private service: CommonService,public userService: UserAccountService, private router:Router){}
  title = 'gstoreFend';
  category: any=[]


 
  displayCartCount:number=0
 
ngOnInit(){





 this.service.getCategoryDropDown().subscribe(data=>{
   this.category=data
   console.log(this.category)
   

 })
this.service.cartItems$.subscribe((cartCount:any)=>{
this.displayCartCount=cartCount   //subscription to the subject of update the cart count on adding and deleting cart items
})
this.displayCartCount=JSON.parse(localStorage.getItem('cart')|| '').length


  
 
}
//event fires when user searches in search box and hit enter
onChangeEvent(event: any){
  var inputInSearch=event.target.value
  this.router.navigate([ 'api/v1/latest-products/',inputInSearch])

  setTimeout(() => {
    window.location.reload()
  }, 500);


}

selectCategory(productName:string,productId:number){
  console.log(productId)
  
  this.router.navigate(['api/v1/latest-products/' + `${productName}/`+ `${productId}`])
  
setTimeout(() => {
  window.location.reload()
}, 500);
    
  
}





}