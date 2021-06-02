
import { Component, OnInit,Injectable} from '@angular/core';
import { CommonService } from '../common.service';
import {AddToCart} from '../add-to-cart'





@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})

export class CartViewComponent  {

cartItem:AddToCart[]=[]
productTotal:any=[]
totalPrice:number=0


  constructor(private service:CommonService) { 
  
   }

 

  
  ngOnInit(){
    

   //parse the localstorage item in cartItem array
this.cartItem=JSON.parse(localStorage.getItem('cart')||'')

this.cartItem.forEach((total:any)=>{           //push price fron cartItem object in productTotal array to iterate  over price
this.productTotal.push(total.price)
  
})

this.calculateTotalPrice()



 
  
  }


quantity(id:any,qty:any){      //execute this function whenever user increases or decreases the quantity
  this.totalPrice=0

  parseFloat(qty)
 // console.log(id ,":" ,parseFloat(qty))
  // console.log(typeof(qty))
   for(let content in this.cartItem){
    
    if(this.cartItem[content].id==id){
      
      this.cartItem[content].price=this.productTotal[content] * qty
    
    
      
    }
   
    

    }

  this.calculateTotalPrice()
    
  }
  calculateTotalPrice(){
    this.totalPrice=0
    var Total:number[]=[]
    this.cartItem.forEach((item:any)=>{     //to iterate over changed quantity product price
    Total.push(parseInt(item.price))
     
    })
  
    
    for(let price in Total){                            //calculate total price of producrs in cart
      this.totalPrice=this.totalPrice+Total[price]
    }

  }


  RemoveFromCart(removeItemID:number){

    var removeItem:AddToCart[]=[]
    var popIndex
      console.log(removeItemID)
      console.log( removeItem=this.cartItem.filter((e:AddToCart)=>e.id===removeItemID))   //check if the id in cartiems is equal to passed id from delete
      this.cartItem.forEach((content:AddToCart)=>{
        if(content.id==removeItemID){
          console.log(popIndex=this.cartItem.indexOf(content))
           this.cartItem.splice(popIndex,1)
          localStorage.setItem('cart',JSON.stringify(this.cartItem))
         
          this.calculateTotalPrice()
          var totalItemInCart=JSON.parse(localStorage.getItem('cart')||'').length   //update cart count after deleting item from cart
          this.service.updateCart(totalItemInCart)   //sending cartcount to subject

        }
      })
  }

  }



