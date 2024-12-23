import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inwords',
  standalone: true
})
export class InwordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"];    
  }

  transform(value:number): string {
    var results="";
    var valueStr= String(value);
    for(let i=0; i<valueStr.length;i++){
      let ch = valueStr.charAt(i);

      if(ch=='.'){
        results= `${results} dot`;
      }
      else{
        results= `${results} ${this.digits[Number(ch)]}`;
      }
    }
    return results;
  }

}
