import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  createNewUser(user: User): Observable<User> {
    return this._http.post<User>(
      `${environment.user_api}${environment.user_api_create}`,
      user
    ).pipe( map((data: any) => data['data']))
  }
}
