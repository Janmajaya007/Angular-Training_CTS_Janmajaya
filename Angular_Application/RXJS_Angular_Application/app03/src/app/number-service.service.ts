import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  constructor() { }

  generateSeries(lb:number, up:number) : Observable<number>{
      const task = (observer: Observer<number>) =>{

        if(lb > up){
          observer.error(`lower bound ${lb} is greater than the upper bound ${up} !`);
          return;
        }
        
        let n= lb;
        const handle = setInterval(()=> {
          observer.next(n);
          n++;
          if(n>up){
            clearInterval(handle);
            observer.complete();
          }
        }, 500); 
      };
      return new Observable(task);
  }
}
