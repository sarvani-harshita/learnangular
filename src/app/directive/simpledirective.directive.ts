import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appSimpledirective,[appSimpledirective] '
})
export class SimpledirectiveDirective {
  @Input('appSimpledirective') somecolor: string = 'pink'
@HostBinding('style.backgroundColor') backgroundColor: string 
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.somecolor;
    // (<HTMLElement>this.element.nativeElement).style.color = 'pink';
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'grey')
    // console.log(this.element, this.renderer);
  }
  
  // @HostListener('mouseenter') onmouseover(event :Event) {
  //   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue')
  // }
  // @HostListener('mouseleave') onmouseexit(event :Event) {
  //   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'grey')
  // }

  @HostListener('mouseover') onmouseexit(event :Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'BlueViolet')
  }

}
