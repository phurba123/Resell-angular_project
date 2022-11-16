import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddEditUser, User } from 'src/app/models/user-model';
import { emailValidator } from 'src/app/shared/validators';
import { ProfileImgComponent } from '../profile-img/profile-img.component';
import { Subject, takeUntil } from 'rxjs'
import { ProfileImg } from 'src/app/models/profileImg-model';

@Component({
  selector: 'resell-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  addEditTitle!: string;
  hidePassword: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordMinLength: number = 6;
  password = new FormControl('', [Validators.required]);
  address = new FormControl('');
  contact = new FormControl();
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('');
  validatorEmail = emailValidator;
  profileImg!: string;

  onDestroy$: Subject<boolean> = new Subject();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { type: string},
    private _dialogRef: MatDialogRef<AddEditUserComponent>,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(this.data.type === AddEditUser.Add) {
      this.addEditTitle = "Add User"
    }
    else if (this.data.type === AddEditUser.Edit) {
      this.addEditTitle = "Edit User";
    }
    console.log('addedittitle: ', this.addEditTitle);
  }

  submitForm(): void {
    let user: User = {
      firstName: this.firstName.value? this.firstName.value: '',
      lastName: this.lastName.value? this.lastName.value: '',
      email: this.email.value? this.email.value: '',
      password: this.password.value? this.password.value: '',
      address: this.address.value? this.address.value: '',
      contactNo: this.contact.value,
      createdOn: new Date(),
      updatedOn: new Date(),
      profileImg: this.profileImg
    };
    this._dialogRef.close(user);
  }

  openImageSelection(): void {
    this._dialog.open(ProfileImgComponent)
    .afterClosed()
    .pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe((img: ProfileImg| null| undefined) => {
      if(img) {
        console.log('image is preent');
        this.profileImg = img.url;
      }
    })
    
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
