import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './title-form.component.html',
  styleUrl: './title-form.component.css'
})
export class TitleFormComponent {

  @Input()
  title !:string;

  @Input()
  formSubmitted!: (title:string) => void ;

  triggeredFormSubmitted(){
    this.formSubmitted(this.title);
  }
}
