import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category-model';
import { Product} from 'src/app/models/product-model'
import { getMyDetailsFromStorage, Keys } from 'src/app/shared/storage';

@Component({
  selector: 'resell-post-product-form',
  templateUrl: './post-product-form.component.html',
  styleUrls: ['./post-product-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostProductFormComponent {
  featureImgUrl!: string;
  images: [] = [];
  title!: string;
  description!: string;
  price!: number;
  location!: string;
  newProduct!: Product
  // workaround for displaying no of boxes for images
  // noOfImages: number[] = [ 1, 2 ];
  // noOfFeaturedImg: number = 1;
  featuredImg: any;

  @Input('currentCategory') currentCategory!: Category;
  @Output('isBackBtnClicked') backBtn: EventEmitter<boolean> = new EventEmitter();
  @Output('onSubmit') private _onSubmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  backButtonClicked(): void {
    this.backBtn.emit(true);
  }

  submitForm(): void {
    let currentUser = getMyDetailsFromStorage(Keys.UserDetail);
    this.newProduct = {
      title: this.title,
      description: this.description,
      price: this.price,
      location: this.location,
      categoryTypeId: this.currentCategory._id,
      categoryTypeName: this.currentCategory.categoryTypeName,
      postedByUserId: currentUser?.userDetails._id,
      postedByUserName: `${currentUser?.userDetails.firstName} ${currentUser?.userDetails.lastName}`

    }
    this._onSubmit.emit(this.newProduct);
  }

  changeFile(e: any) {
    this.featuredImg = e.target.files[0];
  }

}
