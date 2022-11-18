import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category-model';

@Component({
  selector: 'resell-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  categories!: Category[];

  // will hold single selection , lenght will be 1 always
  selectedCategory!: Category[];

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      {
        _id: '1',
        categoryTypeName: "Bikes",
      },
      {
        _id: '2',
        categoryTypeName: "Cars",
      },
      {
        _id: '3',
        categoryTypeName: "Properties",
      },
      {
        _id: '4',
        categoryTypeName: "Consoles",
      }
    ];

    console.log('on init selected category : ', this.selectedCategory)
  }

  onSelection(e: any): void {
    this.selectedCategory = e;
    console.log('selected category : ', this.selectedCategory);
  }

}
