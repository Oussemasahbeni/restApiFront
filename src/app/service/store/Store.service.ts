import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private url = "http://Localhost:8080/"
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.url}products`);
  }

}
