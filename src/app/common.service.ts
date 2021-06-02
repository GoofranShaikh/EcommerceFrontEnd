import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';  
import { AddToCart} from 'src/app/add-to-cart'
import { NONE_TYPE } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cartItems:AddToCart[]=[]
  readonly APIProductsList= "http://127.0.0.1:8000/api/v1/latest-products/";
  readonly APIProductDescription= "http://127.0.0.1:8000/api/v1/products/";
  readonly APIDropDownCategory= "http://127.0.0.1:8000/api/v1/category/";
  //subject to get the count in cart
  private _cartView=new BehaviorSubject<[]>([]);

 
  cartItems$= this._cartView.asObservable();
  

  constructor(private http: HttpClient) { }

  getProductsList():  Observable<AddToCart[]>{
    return this.http.get<AddToCart[]> (this.APIProductsList)
  }

  getProductDescription(categoryslug:any,productslug:any): Observable<AddToCart[]>{
    return this.http.get<AddToCart[]>(this.APIProductDescription + `${categoryslug}/`+`${productslug}/`)
  }


  updateCart(items:any){
    
    this._cartView.next(items);
    console.log(items)
  }


  productSearch(search:any):Observable<any>{
    return this.http.get<any>(this.APIProductsList+ `${search}/`)
  }

  getCategoryDropDown():Observable<string>{
    return this.http.get <string>(this.APIDropDownCategory)
  }
  getCategoryPage(category:any, id:any):Observable<any>{
    return this.http.get<any>(this.APIProductsList +`${category}/`+`${id}/`)
  }


  cartPage(cartContent:AddToCart){
    let cartData:AddToCart[]=[]
    let cart=localStorage.getItem('cart')
    if(cart !==null){
      cartData=JSON.parse(cart);
    }
    //console.log(cartContent.isBoolean)
    var exist=this.productExisist(cartData,cartContent,cart)
   
if(exist==false|| exist==undefined){
    cartData.push(cartContent)
    localStorage.setItem('cart',JSON.stringify(cartData))
    cartContent.isBoolean=true
  }
  }

  

  // getCartLength(){
  //  this.cartItems=JSON.parse(localStorage.getItem('cart')||'')
  //   return this.cartItems.length
  // }
  productExisist(cartData:any,cartContent:any,cart:any):any{
    if(cart===null){
      return false
    }
    for(let i=0;i<cartData.length;i++){
      if(cartData[i].id==cartContent.id){
        cartContent.isBoolean=true
        return cartContent.isBoolean
      }
      
    }


  }

}
