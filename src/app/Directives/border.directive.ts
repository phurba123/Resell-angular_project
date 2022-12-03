import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Directive for adding border,
 * if highlight is provided as true, then it will be highlighted with primary color
 */

@Directive({
  selector: '[resellBorder]'
})
export class BorderDirective {

  @Input() highlight!: boolean;

  constructor(
    private _elementRef: ElementRef
  ) {
    this._elementRef.nativeElement.classList.add('border');
   }

  ngOnInit(): void {
    if(this.highlight) {
      this._elementRef.nativeElement.classList.add('highlight')
    }
  }

}
