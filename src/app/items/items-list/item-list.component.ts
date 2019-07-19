import { Component, OnInit } from '@angular/core';
import{Item}from '../items.model';
import { CartItem } from 'ng-shopping-cart';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }

}
