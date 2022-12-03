import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductFormComponent } from './post-product-form.component';

describe('PostProductFormComponent', () => {
  let component: PostProductFormComponent;
  let fixture: ComponentFixture<PostProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProductFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
