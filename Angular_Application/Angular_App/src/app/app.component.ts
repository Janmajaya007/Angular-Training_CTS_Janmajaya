import { Component } from '@angular/core';
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoanComponent } from "./loan/loan.component";
import { TitleFormComponent } from "./title-form/title-form.component";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [WelcomeComponent, LoanComponent, TitleFormComponent, DirectivesDemoComponent, PipesDemoComponent]
})

export class AppComponent {
  title:string;
  
  constructor(){
    this.title="My Angular App";
  }

  updateTitle =(title:string) =>{
    this.title=title;
  }
}
