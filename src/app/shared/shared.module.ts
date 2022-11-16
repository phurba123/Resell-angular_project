import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';

// shared material modules
const materialModules = [
  MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatDialogModule, MatMenuModule
]



@NgModule({
  declarations: [],
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
    HttpClientModule
  ]
})
export class SharedModule { }
