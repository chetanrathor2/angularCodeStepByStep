import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'red';
   }

}
