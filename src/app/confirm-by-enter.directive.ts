import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[confirmByEnter]'
})
export class ConfirmByEnterDirective {

  @Output() confirmByEnter: EventEmitter<void> = new EventEmitter();


  @HostListener('keydown.enter', ['$event'])
  public handleClick(event: KeyboardEvent): void {
    this.confirmByEnter.emit();
    (event.target as HTMLElement).blur();
  }

}
