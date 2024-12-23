import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {

  @Input()
  type!:string;

  messageBosClasses:string[];

  constructor(){
    this.messageBosClasses= ["col-sm-8", "p-4", "m-2","alert","alert-info","mx-auto"];
  }
  
  ngOnChanges(){
    if(this.type && "error"===this.type){
      this.messageBosClasses=["col-sm-8", "p-4", "m-2","alert","alert-danger","mx-auto"];
    }
  }
}
