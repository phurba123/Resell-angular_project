import { Component, OnInit } from '@angular/core';
import { AddEditUser, User } from 'src/app/models/user-model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from 'src/app/dialogs/add-edit-user/add-edit-user.component';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'resell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  addEditUser: any;

  onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private _dialog: MatDialog,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.addEditUser = AddEditUser;
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
            console.log('new user created is : ', newUser)
          })
        }
        else {
          //login
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
