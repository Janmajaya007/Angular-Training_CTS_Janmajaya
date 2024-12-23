import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [HighlightDirective, FormsModule, CommonModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {

  friends:string[];
  friendName!:string;
  constructor(){
    this.friends=[];
  }
  addFriend(){
    if(this.friendName)
      this.friends.push(this.friendName);
  }
  removeFriend(index:number){
    this.friends.slice(index, 1);
  }

}
