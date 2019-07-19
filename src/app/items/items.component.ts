import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Item } from './items.model';
import { ProductService } from '../services/productService';
import { CartService } from '../services/cartService';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public products:Item[]=[];
  id:string;
  public currentQuantity=0;
  constructor(private productService:ProductService,private cartService:CartService,private route:ActivatedRoute) 
  {   
    
}

  ngOnInit()
   {
    this.route.params
    .subscribe(
      (params: Params) => {
      this.id=params['id'];
      this.products=this.productService.getWantedProducts(this.id);

    }
    );


  }
  public addToCart(id:string)
  {
    this.products.forEach((key)=>{
      if(key["id"]==id)
      {
        key.quantity++;
        this.cartService.ProdOnCart.push(key);
        
      }
      
  });
    
    
    
  }
  
  minusOneItem(id:string,q)
  {

  }


}
