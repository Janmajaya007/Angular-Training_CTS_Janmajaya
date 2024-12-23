import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent {

  loanAmount:number ;
  rateOfInterest: number ;
  timePeriodInMonths: number;
  calculatedEMI: number;

  constructor(){
    this.loanAmount=0;
    this.rateOfInterest=0;
    this.timePeriodInMonths=0;
    this.calculatedEMI=0;
  }

  emiCalculation(loanAmount:number , rateOfInterest: number, timePeriodInMonths: number) : number{
    // this.calculateEMI=((this.loanAmount * this. timePeriodInMonths ) * (this.rateOfInterest/ 100));
    const monthlyIntrest = rateOfInterest /100 /12;
    this.calculatedEMI = (loanAmount * monthlyIntrest * Math.pow(1 + monthlyIntrest, timePeriodInMonths))/
                (Math.pow (1 + monthlyIntrest, timePeriodInMonths)- 1);

    if(Number.isNaN(this.calculatedEMI)){
      return this.calculatedEMI=0;
    }

    return this.calculatedEMI;
  }

  resetEMI(){
    return this.calculatedEMI = 0;
  }
}
