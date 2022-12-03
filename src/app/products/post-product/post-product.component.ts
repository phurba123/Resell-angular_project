import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { buffer, Subject, takeUntil } from 'rxjs';
import { ApiResponse } from 'src/app/models/apiresponse-model';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'resell-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit, OnDestroy {

  categories!: Category[];

  // will hold single selection , length will be 1 always
  selectedCategory!: Category[]| null| undefined;

  onDestroy$: Subject<boolean> = new Subject();
  imgPresent:boolean = false;
  imgUrl:any;

  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  onSelection(e: any): void {
    this.selectedCategory = e;
    console.log('selected category : ', this.selectedCategory);
  }

  // back btn clicked event will only be fired from small devices like mobiles
  onBackBtnClicked(e: boolean): void {
    if(e) {
      this.selectedCategory = undefined;
    }
  };

  // create new post, triggered from post form
  createPost(e: any) {
    this._productService.postProduct(e)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((val: any) => {
      console.log('val : ', val);
      this._snackbar.open("Product Created", "OK", {
        duration: 1500
      })
    })
  }

  getAllCategories(): void {
    this._categoryService.getAllCategories()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((res: ApiResponse) => {
      this.categories = res.data;
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
