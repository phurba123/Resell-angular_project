import { Component, OnInit } from '@angular/core';
import { AddEditUser, User, UserWithAuth } from 'src/app/models/user-model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from 'src/app/dialogs/add-edit-user/add-edit-user.component';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from 'src/app/models/apiresponse-model';
import { deleteUserDetail, getMyDetailsFromStorage, Keys, localStorageSave } from 'src/app/shared/storage';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'resell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  addEditUser: any;
  currentUser!: UserWithAuth| null;

  onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private _dialog: MatDialog,
    private _userService: UserService,
    private _snackbar: MatSnackBar
  ) {
    this.isLoggedIn$ = _userService.isLoggedIn;
  }

  ngOnInit(): void {
    this.addEditUser = AddEditUser;
    this.currentUser = getMyDetailsFromStorage(Keys.UserDetail);
    console.log('this.currentUser: ', this.currentUser);
    if(this.currentUser) {
      this._userService.isLoggedIn.next(true);
    }
    else {
      this._userService.isLoggedIn.next(false)
    }
  }

  addUser(type: string) {
    console.log('type: ', type);
    this._dialog.open(AddEditUserComponent, {
      data: {
        type
      }
    })
    // .afterClosed()
  }

  openLogin(): void {
    this._dialog.open(LoginComponent)
    .afterClosed()
    .pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((val: any) => {
      console.log('val : ', val);
      if(val) {
        console.log('login since val is present');
        if(val.isSignUp) {
          delete val.isSignUp;
          console.log('val after issingup deleted : ', val)
          this._userService.createNewUser(val)
          .pipe(takeUntil(this.onDestroy$))
          .subscribe((newUser: User) => {
            console.log('new user created is : ', newUser);
            this._snackbar.open("Account Created, Login Now", "OK", {
              duration: 1500
            })
          })
        }
        else {
          //login
          console.log({
            message: 'into login section',
            val
          })
          this._userService.loginUser(val.email, val.password)
          .pipe(takeUntil(this.onDestroy$))
          .subscribe((apiresponse: ApiResponse) => {
            console.log('api response : ', apiresponse);
            console.log('my details : ', apiresponse.data);
            localStorageSave(Keys.UserDetail, JSON.stringify(apiresponse.data));
            this._userService.isLoggedIn.next(true);
            this.currentUser = apiresponse.data;
            this._snackbar.open('Logged In', "Ok", {
              duration: 1500
            })
          },
          (err) => {
            console.log('err: ', err);
            this._snackbar.open(err.error.message, "Ok", {
              duration: 1500
            })
          })
        }
      }
    })
  }

  logoutUser(): void {
    if(this.currentUser?.userDetails._id) {
      this._userService.logoutUser(this.currentUser.userDetails._id)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((val: ApiResponse) => {
        this._snackbar.open('Logged Out', "Ok", {
          duration: 1500
        });
        this._userService.isLoggedIn.next(false);
        deleteUserDetail(Keys.UserDetail);
      }, (err: any) => {
        let msg = err.error.message? err.error.message : "Not able to logout";
        this._snackbar.open(msg, "Ok", {
          duration: 1500
        })
      })
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
