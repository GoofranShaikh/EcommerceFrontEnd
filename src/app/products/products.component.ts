import { Component, OnInit } from '@angular/core';
import { AddToCart } from '../add-to-cart';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showProducts:AddToCart[]=[]

  constructor(private service:CommonService ) { }

  ngOnInit(): void {
    this.getProductsList()
  }


  getProductsList() {
    this.service.getProductsList().subscribe(data=>{
      this.showProducts=data;
      
    })
  }


}
