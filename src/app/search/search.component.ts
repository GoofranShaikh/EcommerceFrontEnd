import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service'
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   searchFound: any=[]
  
  constructor(private service:CommonService ,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.searchBox()
    
  
  }
   searchBox():void{
    this.service.productSearch(this.route.snapshot.params.query).subscribe(backendData=>{
      this.searchFound=backendData
      console.log(this.route)
      
      
      

    })  
  
  }
  

}



