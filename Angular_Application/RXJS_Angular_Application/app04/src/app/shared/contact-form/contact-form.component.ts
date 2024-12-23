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

    

    // if(id){
    //   this.isEditing= true;
    //   let c = contactService.getAById(Number(id));
    //   this.contsctForm.reset(c);
    // }
  }

  ngOnInit(){
    let id = this.activatedroute.snapshot.params["id"];

    if(id){
        this.isEditing= true;
        this.contactService.getAById(Number(id)).subscribe({
            next: data => this.contsctForm.reset(data),
            error: err=> console.log(err)
        })
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
  // let ob: Observable<Contact>;
  //   if(this.isEditing){
  //     ob = this.contactService.update(this.contsctForm.value);
  //   }
  //   else{
  //     this.contactService.add(this.contsctForm.value);
  //   }
  //   this.router.navigateByUrl('/contacts')
  // }
  (this.isEditing?
    this.contactService.update(this.contsctForm.value):
    this.contactService.add(this.contsctForm.value)
  ).subscribe({
            next: data => this.router.navigateByUrl('/contacts'),
            error: err=> console.log(err)
  });
}
}
