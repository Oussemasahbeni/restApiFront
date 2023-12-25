import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store/Store.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products);
      }
    )
  }
}