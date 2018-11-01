import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[test]'
})
export class TestDirective {

  constructor(private element: ElementRef) {}


  @HostListener('keydown.control.enter')
  public test(): void {
    console.log('ctrl + enter');
    this.element.nativeElement.value += '\n';
  }

}
