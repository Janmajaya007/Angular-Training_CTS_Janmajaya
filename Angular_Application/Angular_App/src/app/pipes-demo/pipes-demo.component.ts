import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InwordsPipe } from '../inwords.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, InwordsPipe ],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  str:string;
  num: number;
  date:Date;

  constructor(){
    this.str= "Hu I am Janmajaya";
    this.date= new Date();
    this.num=12345.456;
  }
}
