import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { BorderDirective } from '../Directives/border.directive';

// shared material modules
const materialModules = [
  MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatDialogModule, MatMenuModule, MatSnackBarModule
]



@NgModule({
  declarations: [
    BorderDirective
  ],
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BorderDirective
  ]
})
export class SharedModule { }
