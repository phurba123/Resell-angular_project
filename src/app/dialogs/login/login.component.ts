import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddEditUser } from 'src/app/models/user-model';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { emailValidator } from 'src/app/shared/validators';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'resell-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  validatorEmail = emailValidator;

  hidePassword: boolean = true;

  onDestroy$: Subject<boolean> = new Subject();
  constructor(
    private _dialogRef: MatDialogRef<LoginComponent>,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  goToSignUp(): void {
    // this._dialogRef.close(null);
    this._dialog.open(AddEditUserComponent, {
      data: {
        type: AddEditUser.Add
      }
    })
    .afterClosed()
    .pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((val) => {
      console.log('add user data received on login component : ', val);
      if(val) {
        val.isSignUp = true;
        this._dialogRef.close(val)
      }
      else {
        this._dialogRef.close()
      }  
    })
  }

  loginSubmit(): void {
    let data = {
      email: this.email.value,
      password: this.password.value,
      isSignUp: false
    }
    this._dialogRef.close(data);
  }

}
