import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { CommonService} from '../common.service';
import{ActivatedRoute} from '@angular/router';
import {AddToCart} from '../add-to-cart'





@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
productDescription:any

constructor(private service:CommonService, private route:ActivatedRoute)  { }



  ngOnInit() {
    
    
    this.service.getProductDescription(this.route.snapshot.params.categoryslug, this.route.snapshot.params.productslug).subscribe((data)=>{
      this.productDescription=data
      console.log(this.productDescription)
     // this.service.updateCart(this.productDescription)
    
 
      
      
  })
    
  }

     
    AddtoCart(item:AddToCart){
      this.service.cartPage(item)
      var cartCount=JSON.parse(localStorage.getItem('cart')||'').length
      this.service.updateCart(cartCount)

      

    }
  
    
  
    
      
    
    

   

}
