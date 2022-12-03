import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { PostProductComponent } from './post-product/post-product.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { PostProductFormComponent } from './post-product-form/post-product-form.component';

@NgModule({
  declarations: [
    PostProductComponent,
    PostProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatListModule,
    SharedModule
  ]
})
export class ProductsModule { }
