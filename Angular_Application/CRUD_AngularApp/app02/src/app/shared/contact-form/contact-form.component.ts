import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contsctForm: FormGroup;
  isEditing: boolean

  constructor(private formBuilder: FormBuilder, private contactService: ContactsService, private router:Router, private activatedroute: ActivatedRoute){
    this.contsctForm= formBuilder.group({
      id:[0],
      fullName:["", [Validators.required, Validators.minLength(5)]],
      mobile:["", [Validators.required, Validators.pattern("[7-9][0-9]{9}")]],
      emailId:["", [Validators.required, Validators.email]]
    });
    this.isEditing= false;

    let id = this.activatedroute.snapshot.params["id"];

    if(id){
      this.isEditing= true;
      let c = contactService.getById(Number(id));
      this.contsctForm.reset(c);
    }
  }

  get fullName(){
    return this.contsctForm.get('fullName')
  }
  get mobile(){
    return this.contsctForm.get('mobile')
  }
  get emailId(){
    return this.contsctForm.get('emailId')
  }

  formSubmitted(){

    if(this.isEditing){
      this.contactService.update(this.contsctForm.value);
    }
    else{
      this.contactService.add(this.contsctForm.value);
    }
    
    this.router.navigateByUrl('/contacts')
  }
}
