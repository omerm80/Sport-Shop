import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cartService';
import { Item } from '../items/items.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
public cartItems:Item[]=[];
public priceOfCart;

  constructor(private cartService:CartService) {
    console.log("dsfsdf: " +this.cartService.ProdOnCart);

   }

  ngOnInit() {
    this.priceOfCart=this.cartService.getPriceOfAll();
    this.cartItems=this.cartService.ProdOnCart;
    console.log(this.cartItems);
  }
  
  removeProduct(id:string)  
  {

   this.priceOfCart= this.cartService.removeFromCart(id,this.priceOfCart);  

  }
  plusOneItem(id:string)
  {
    this.priceOfCart=this.cartService.addOne(id,this.priceOfCart);

  }
  minusOneItem(id:string)
  {
    this.priceOfCart=this.cartService.minusOne(id,this.priceOfCart);

  }


}
