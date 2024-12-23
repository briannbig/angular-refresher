import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor (private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#0d1b2a'
    el.nativeElement.style.color = '#f5f5f5'
    el.nativeElement.style.borderRadius = '5px'
    el.nativeElement.style.padding = '7px'
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.magnify()
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.magnify('20px')
  }

  private magnify (fontSize: string = '25px') {
    this.el.nativeElement.style.fontSize = fontSize
  }
}
