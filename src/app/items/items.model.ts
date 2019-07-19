import { NumberValueAccessor } from '@angular/forms';
import { CartItem } from 'ng-shopping-cart';

export class Item  
{
    public id: string;
    public name: string;
    public price: number;
    public image: string;
    public quantity: number;
    public description: string;
    public department: string;


    constructor(id:string,name:string,price:number,image:string,quantity:number,description:string,department: string) {
        this.id = id;
        this.name=name;
        this.price=price;
        this.image=image;
        this.quantity=quantity;
        this.description=description;
        this.department=department;
      }

  
 
        
    
   
 
        
    
}


