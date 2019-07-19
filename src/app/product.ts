export class Product {
    public price:number;
    public name:string;
    public description:string;
    public image:string;

    constructor(name:string,price:number,description:string,image:string)
    {
        this.name=name;
        this.price=price;
        this.description=description;
        this.image=image;
        
    }

}
