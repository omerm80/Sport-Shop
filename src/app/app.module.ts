import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CART_ITEM_CLASS, CART_SERVICE_CONFIGURATION, CartService, SessionStorageCartService} from 'ng-shopping-cart';

import {ShoppingCartModule} from 'ng-shopping-cart'; // <-- Import the module class
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemsComponent} from './items/items.component'
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './items/items-list/item-list.component';
import { ItemDetailComponent } from './items/items-detail/item-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Item } from './items/items.model';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';




const appRoutes: Routes = [  

  { path:'ProductList/:id', component: ItemsComponent },
  { path:'shoppingEdit', component: ShoppingEditComponent },
  { path:'shoppingList', component: ShoppingListComponent },

  { path:'itemDetail', component: ItemDetailComponent },
  {path:'auth',component:AuthComponent}



  
];


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    ItemListComponent,
    ItemDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent,LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule, ShoppingCartModule.forRoot({ // <-- Add the cart module to your root module
      itemType: Item, 
      serviceType: 'localStorage',
      serviceOptions: {
        storageKey: 'NgShoppingCart',
        clearOnError: true
      }
    }), RouterModule.forRoot(appRoutes)//{ enableTracing: true } // <-- debugging purposes only
    ,FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
