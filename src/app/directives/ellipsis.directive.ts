import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appEllipsis]'
})
export class EllipsisDirective {
  constructor (private el: ElementRef) {
    el.nativeElement.style.whiteSpace = 'nowrap'
    el.nativeElement.style.overflow = 'hidden'
    el.nativeElement.style.textOverflow = 'ellipsis'
  }
}
