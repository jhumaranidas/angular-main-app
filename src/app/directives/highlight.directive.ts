import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appHighlight+"--"+this.defaultColor);
    this.highlight(this.defaultColor || this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
