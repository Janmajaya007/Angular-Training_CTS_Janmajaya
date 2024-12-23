import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  username: string;
  logos:string[];
  logoindex:number;
  logoWidth: number;
  logoClass:any;

  constructor(){
    this.username="Janmajaya";

    this.logos=[
      "assets/images/welcome1.jpg",
      "assets/images/welcome2.jpg",
      "assets/images/welcome3.jpg"
    ];

    this.logoindex=0;
    this.logoWidth=300;
    this.logoClass= {bordered:true, centered:true }
  }

  changeLogo(){
    this.logoindex++;
    if(this.logoindex===this.logos.length){
      this.logoindex=0;
    }
  }



}
