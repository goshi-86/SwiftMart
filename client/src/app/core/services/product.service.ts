import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from 'app/shared/models/product';


@Injectable({ providedIn: 'root' })
export class ProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product);
  }

}
