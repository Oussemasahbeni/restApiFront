import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/Product';
import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private url = "http://Localhost:8080/"
  constructor(private http: HttpClient) { }

  categories: Category[] = []

  getProducts() {
    return this.http.get<Product[]>(`${this.url}products`);
  }

  addProduct(product: Product) {
    return this.http.post<any>(`${this.url}addProduct`, product);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}product/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}product/${id}`);
  }

  updateProduct(product: Product) {
    console.log(product)
    return this.http.patch<Product>(`${this.url}updateProduct`, product);
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.url}categories`);
  }

  addCategory(category: Category) {
    return this.http.post<Category>(`${this.url}addCategory`, category);
  }

  deleteCategory(id:number){
    return this.http.delete(`${this.url}category/${id}`);
  }



}
