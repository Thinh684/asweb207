import { Injectable } from '@angular/core';
// import { data } from './MockData';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './Product';
@Injectable()
export class ProductService{
    api='https://5e7c193fa917d70016682dd6.mockapi.io/product';
    products = data;
    constructor(
      private http : HttpClient
      ) { }

    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.api);
    }
    getProduct(id): Observable<Product>{
      return this.http.get<Product>(`${this.api}/${id}`)
    // return this.products.find(product => product.id == id);
    }
    removeProduct(id): Observable<Product>{
        return this.http.delete<Product>(`${this.api}/${id}`);
      }
      addProduct(product){
        return this.http.post<Product>(`${this.api}`, product);
      }
      updateProduct(product){
        return this.http.put<Product>(`${this.api}/${product.id}`, product);
      }
}