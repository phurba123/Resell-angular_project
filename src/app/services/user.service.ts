import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/apiresponse-model';
import { User } from '../models/user-model';
import { BehaviorSubject } from 'rxjs';
import { IS_PUBLIC_API } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _http: HttpClient
  ) { }

  createNewUser(user: User): Observable<User> {
    return this._http.post<User>(
      `${environment.user_api}${environment.user_api_create}`,
      user, {
        context: new HttpContext().set(IS_PUBLIC_API, true)
      }
    ).pipe( map((data: any) => data['data']), catchError(this.handleError))
  }

  loginUser(email: string, password: string): Observable<ApiResponse> {
    let info = {
      email,
      password
    }
    return this._http.post<ApiResponse>(
      `${environment.user_api}${environment.user_api_login}`, info, {
        context: new HttpContext().set(IS_PUBLIC_API, true)
      }
    );
  }

  logoutUser(_id: string): Observable<ApiResponse> {
    let data = {
      _id
    }
    console.log('_id : ', _id)
    return this._http.post<ApiResponse>(`${environment.user_api}${environment.user_api_logout}`, data);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
