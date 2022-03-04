import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}
  createProduct(productBody: any) {
    return this.httpClient.post(this.baseUrl, productBody);
  }

  viewProduct(productId: any) {
    this.baseUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.get(this.baseUrl);
  }

  updateProduct(productId: any, productBody: any) {
    this.baseUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.put(this.baseUrl, productBody);
  }
}
