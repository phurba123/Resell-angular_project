import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/apiresponse-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllCategories(): Observable<ApiResponse> {
    let url = `${environment.category_api}${environment.category_getAll}`;
    return this._http.get<ApiResponse>(url);
  }
}
