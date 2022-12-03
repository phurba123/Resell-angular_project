import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IS_PUBLIC_API } from '../interceptors/auth.interceptor';
import { ApiResponse } from '../models/apiresponse-model';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  //get all products
  getAllProducts(): Observable<ApiResponse> {
    return this._http.get<ApiResponse>(
      `${environment.product_api}${environment.product_api_getAll}`, {
        context: new HttpContext().set(IS_PUBLIC_API, true)
      }
    );
  }

  //post new product
  postProduct(product: any): Observable<ApiResponse> {
    console.log('service post product: ', product);
    // Create form data
    // const formData = new FormData(); 
        
    // Store form name as "file" with file data
    // formData.append("featuredImg", product.featuredImg, product.featuredImg.name);
    // formData.append('msg', product.msg)
    return this._http.post<ApiResponse>(
      `${environment.product_api}${environment.product_api_create}`, product
    )
  };
}
