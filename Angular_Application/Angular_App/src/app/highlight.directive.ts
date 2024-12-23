import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Interface } from 'readline';

interface colors {
  bgColor:string;
  fgColor:string;
}

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input("appHighlight")
  colors:any;
  // appHighlight:colors;

  constructor(private hostElement: ElementRef) { 
    // this.colors= {bgColor:"red", fgColor:"white"};
    // this.setColors();
  }

  ngOnChanges(){
    if(!this.colors){
      this.colors= {bgColor:"red", fgColor:"white"};
    }
    this.setColors();
  }

  @HostListener("mouseleave")
  setColors( ) {
    // if(typeof appHighlight ===  colors){
      this.hostElement.nativeElement.style.color=this.colors.fgColor;
      this.hostElement.nativeElement.style.backgroundColor=this.colors.bgColor;
    // }
    
  }

  @HostListener("mouseover")
  setReverseColors(){
    this.hostElement.nativeElement.style.color=this.colors.bgColor;
    this.hostElement.nativeElement.style.backgroundColor=this.colors.fgColor;
  }
}
