import { Component } from '@angular/core';
import { NumberServiceService } from '../number-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-number-series',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-series.component.html',
  styleUrl: './number-series.component.css'
})
export class NumberSeriesComponent {

  lb:number;
  ub: number;

  results!:number[];
  errorMessage!: string | null ;
  isinProgress!: boolean;

  constructor(private numberService: NumberServiceService){
    this.lb=0;
    this.ub=0;
  }

  formSubmitted(){
    this.results=[];
    this.errorMessage= null;
    this.isinProgress= true;

    this.numberService.generateSeries(this.lb, this.ub).subscribe({
      next: val => this.results.push(val),
      error: err =>{this.errorMessage=err, this.isinProgress= false;},
      complete: ()=> {this.isinProgress= false; }
    });
  }
}
