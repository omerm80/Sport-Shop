import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Item } from '../items/items.model';

@Injectable({
    providedIn: 'root',
  })

export class ProductService {
     products: Item[];
    constructor()
    {
        this.products=[
        { id: 'p01', name: 'reebok classic', price: 400, image: 'https://images-na.ssl-images-amazon.com/images/I/81Uh3wZBHeL._UX395_.jpg', quantity:0,description:'reebok classic men shoes 2019 collection' ,department:"mens shoes"},
        { id: 'p02', name: 'Nike Football', price: 120, image: 'https://images-na.ssl-images-amazon.com/images/I/71m%2B7AG0MEL._SX425_.jpg', quantity:0,description:'nike football',department:"football"},
        { id: 'p03', name: 'Yankees Hat', price: 50, image: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2659000/ff_2659907_full.jpg&w=340', quantity:100 ,description:"yankees hat",department:"mens hats"},
        { id: 'p04', name: 'Nike Black Polo', price: 90, image: 'data:image/jpeg;base64,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', quantity:300,description:'nike black polo for mens' ,department:"mens polo"},
        { id: 'p05', name: 'Adidas Original T-shirt', price: 90, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b4243520a2a34615befda80b00d5d3b0_9366/Trefoil_Tee_Black_CW0709_01_laydown.jpg', quantity:0,description:'adidas orignal t-shirts for mens' ,department:"mens t-shirts"},
        { id: 'p06', name: 'Nike Hoody', price: 220, image: 'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/3690425_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$', quantity:0,description:'nike just do it hoody for mens' ,department:"mens hoodies"},
        { id: 'p07', name: 'Hi-tech Gym Gloves', price: 70, image: 'https://ypk.cs4u.co.il/Images/7Q/O98140005/513/560X500_0_jpg?ud=636467668443270000', quantity:0,description:'hi-tech gloves for gym' ,department:"gym"},
        { id: 'p08', name: 'Spalding Basketball', price: 70, image: 'https://images-na.ssl-images-amazon.com/images/I/A1ser-udbFL._SX466_.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"basketball"},
        { id: 'p09', name: 'Adidas Sam Smith', price: 350, image: 'https://images-na.ssl-images-amazon.com/images/I/81Ya08rm1jL._UL1500_.jpg', quantity:0,description:'adidas sam smith mens shoes with green stripe' ,department:"mens shoes"},

        { id: 'p10', name: 'Adidas Swift Run', price: 470, image: 'https://cdn.runrepeat.com/i/adidas/25454/adidas-men-s-swift-run-shoes-sesame-black-white-4-m-us-mens-sesame-black-white-09d1-600.jpg', quantity:0,description:'adidas swift run off white color' ,department:"mens shoes"},
        { id: 'p11', name: 'Adidas Superstar', price: 300, image: 'https://cdn.runrepeat.com/i/adidas/25218/adidas-originals-superstar-chaussons-sneaker-homme-blanc-ftwr-white-core-black-ftwr-white-40-2-3-eu-mixte-adulte-blanc-ftwr-white-core-black-ftwr-white-1c0d-600.jpg', quantity:0,description:'adidas superstar white coloe' ,department:"mens shoes"},
        { id: 'p12', name: 'Pharrell Williams Tennis Hu', price: 600, image: 'https://cdn.runrepeat.com/i/adidas/25975/adidas-pharrell-williams-tennis-hu-tech-beige-tech-beige-chalk-white-47-homme-beige-3f6e-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p14', name: 'Adidas Coast Star', price: 300, image: 'https://cdn.runrepeat.com/i/adidas/31673/adidas-men-s-coast-star-low-top-sneakers-footwear-white-core-black-0-11-5-uk-black-core-black-footwear-white-core-black-0-46d7-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p15', name: 'Nike Air Force 1 Low', price: 300, image: 'https://cdn.runrepeat.com/i/nike/24841/nike-air-force-1-07-low-all-black-men-lifestyle-casual-sneakers-new-7-mens-black-black-8d33-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p16', name: 'Nike Air Presto', price: 300, image: 'https://cdn.runrepeat.com/i/nike/24812/nike-men-s-air-presto-white-white-black-running-shoe-12-men-us-mens-white-white-black-6423-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p17', name: 'Nike Air Zoom Pegasus 35', price: 300, image: 'https://cdn.runrepeat.com/i/nike/28162/nike-men-s-air-zoom-pegasus-35-black-white-gunsmoke-oil-grey-14-0-mens-black-white-gunsmoke-oil-grey-e85f-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p18', name: 'Nike Air Force 1 High', price: 300, image: 'https://cdn.runrepeat.com/i/nike/25231/nike-mens-air-force-1-high-07-basketball-shoes-white-white-315121-115-white-white-000f-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p19', name: 'Nike SB Stefan Janoski Max', price: 300, image: 'https://cdn.runrepeat.com/i/nike/24677/nike-sb-stefan-janoski-max-schuhe-black-white-41-negro-aafa-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p20', name: 'New Balance 515', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/25555/new-balance-515-suede-mesh-mens-green-fb34-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p21', name: 'New Balance 574', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/25202/new-balance-men-s-iconic-574-sneaker-burgundy-4-5-d-us-mens-burgundy-b286-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p22', name: 'New Balance 247 Classic', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/24751/new-balance-247-classic-men-s-running-classics-shoes-mrl247bg-black-dark-grey-e0b2-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p23', name: 'New Balance 247', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/30306/new-balance-men-s-247-trainers-blue-9-us-blue-d1f2-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p24', name: 'New Balance 696', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/25227/new-balance-696-black-black-black-ed36-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p25', name: 'New Balance 574 Retro Sport', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/25506/new-balance-mens-574-retro-sport-shoes-6-d-m-us-steel-silver-mink-mens-steel-silver-mink-7b44-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p26', name: 'New Balance 995', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/25393/995-new-balance-men-s-made-in-us-collection-shoes-m995chb-black-silver-black-silver-f2de-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},
        { id: 'p27', name: 'New Balance 1550', price: 300, image: 'https://cdn.runrepeat.com/i/new-balance/24750/new-balance-1550-dark-green-6bc7-600.jpg', quantity:0,description:'spalding size 7 basketball' ,department:"mens shoes"},

    ];
    }
    
   
    find(id: string): Item {
        return this.products[this.getSelectedIndex(id)];
    }
    public getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }


    getAllProducts(): Item[] {
        debugger;

        return this.products;
    }

    getMenShoes():Item[] {

         var shoes:Item[]=[];
        this.products.forEach((key)=>{
            if(key["department"]=="mens shoes")
            {
                shoes.push(key);
            }
            
        });
        return shoes;

    }
    getMenHats():Item[] {

        var menHats:Item[]=[];
       this.products.forEach((key)=>{
           if(key["department"]=="mens hats")
           {
               menHats.push(key);
           }
           
       });
       return menHats;

   }

   getWantedProducts(dep:string):Item[] {

    var wantedProd:Item[]=[];
   this.products.forEach((key)=>{
       if(key["department"]==dep)
       {
        wantedProd.push(key);
       }
       
   });
   return wantedProd;

}

}