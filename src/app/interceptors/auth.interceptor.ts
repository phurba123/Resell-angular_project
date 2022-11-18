import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { getMyDetailsFromStorage, Keys } from '../shared/storage';
import { UserWithAuth } from '../models/user-model';
import { MatSnackBar } from '@angular/material/snack-bar';

export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _snackbar: MatSnackBar
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(IS_PUBLIC_API)) {
      console.log('public api is true, so not adding auth header');
      return next.handle(request);
    }
    console.log('interceptor is being called  called,public_api context is : ', request.context.get(IS_PUBLIC_API));
    const userDetail = getMyDetailsFromStorage(Keys.UserDetail);
    // Clone the request and set the new header in one step.
    if(userDetail) {
      const authReq = request.clone({ 
        setHeaders: { authToken: userDetail?.authToken } 
      });
      return next.handle(authReq);
    }
    else {
      this._snackbar.open("Login Again", "OK", {
        duration: 1500
      })
      return EMPTY;
    }
    
  }
}
