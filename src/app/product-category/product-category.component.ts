
import { Component, OnInit } from '@angular/core';
import { CommonService} from 'src/app/common.service'
import {ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
categoryPage:any
  constructor(private service:CommonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.service.getCategoryPage(this.route.snapshot.params.categories,this.route.snapshot.params.query).subscribe((products:any)=>{
     this.categoryPage=products
     console.log(this.categoryPage)
    })
  }

}
