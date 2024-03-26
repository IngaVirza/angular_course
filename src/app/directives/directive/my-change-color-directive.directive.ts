import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
  // standalone: true
})
export class MyChangeColorDirectiveDirective {
  colors = ['red', 'green', 'blue'];
  constructor(el: ElementRef) {
    this.changeColor(el);
  }

  private changeColor(el: ElementRef) {
    setInterval(()=> {
      el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    }, 2000)
  }
}
