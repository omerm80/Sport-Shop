import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Item } from '../items/items.model';

@Injectable({
    providedIn: 'root',
  })

export class CartService {
    public ProdOnCart: Item[]=[];
  public price=this.getPriceOfAll();
constructor(){

}
getPriceOfAll():number
{
  var sum=0;
  this.ProdOnCart.forEach((key)=>{
    sum+=(key.price)*(key.quantity);

  });
  console.log("price of all is: " +sum);
  return sum;
}


removeFromCart(id:string,price:number):number
{
  this.ProdOnCart.forEach((key)=>{

    if(key.id==id)
    {
      const index=this.ProdOnCart.indexOf(key);
      if (index !== -1) {
        console.log("price before: "+price);

        price -=key.price;
        this.price -=key.price;

        console.log("price after: "+price);

        this.ProdOnCart.splice(index, 1);

      }
    }


  });
  return price;
}
addOne(id:string,price:number)
{
  this.ProdOnCart.forEach((key)=>{

    if(key.id==id)
    {
      console.log("price before Plus: "+price);

      key.quantity++;
      console.log("price after Plus: "+price);

      
    }
});
}

minusOne(id:string,price:number)
{
  this.ProdOnCart.forEach((key)=>{

    if(key.id==id)
    {
      console.log("price before Minus: "+price);
      key.quantity--;
      price -=key.price;
      console.log("price after Minus: "+price);


      
    }
});
  


}

}
  
  
  
