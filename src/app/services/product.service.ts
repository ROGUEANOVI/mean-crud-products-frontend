import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  URL = "http://localhost:3000/api/products/";
 
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.URL);
  }

  addProduct(product: Product): Observable<any>{
    return this.http.post(this.URL, product);
  }

  getProduct(id: string): Observable<any>{
    return this.http.get(this.URL + id);
  }

  editProduct(id: string, product: Product): Observable<any>{
    return this.http.put(this.URL + id, product);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(this.URL + id);
  }

}
