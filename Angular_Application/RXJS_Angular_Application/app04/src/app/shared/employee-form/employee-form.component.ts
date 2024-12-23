import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employeeForm: FormGroup;
  isEditing: boolean

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private router:Router, private activatedroute: ActivatedRoute){
    this.employeeForm= formBuilder.group({
      id:[0],
      fullName:["", [Validators.required, Validators.minLength(5)]],
      mobile:["", [Validators.required, Validators.pattern("[7-9][0-9]{9}")]],
      emailId:["", [Validators.required, Validators.email]],
      department:["", [Validators.required,  Validators.minLength(2)]]
    });
    this.isEditing= false;

    // let id = this.activatedroute.snapshot.params["id"];

    // if(id){
    //   this.isEditing= true;
    //   let c = employeeService.getById(Number(id));
    //   this.employeeForm.reset(c);
    // }
  }
  ngOnInit(){
    let id = this.activatedroute.snapshot.params["id"];

    if(id){
        this.isEditing= true;
        this.employeeService.getAById(Number(id)).subscribe({
            next: data => this.employeeForm.reset(data),
            error: err=> console.log(err)
        })
  }
}

  get fullName(){
    return this.employeeForm.get('fullName')
  }
  get mobile(){
    return this.employeeForm.get('mobile')
  }
  get emailId(){
    return this.employeeForm.get('emailId')
  }
  get department(){
    return this.employeeForm.get('department')
  }

  formSubmitted(){
    // if(this.isEditing){
    //   this.employeeService.update(this.employeeForm.value);
    // }
    // else{
    //   this.employeeService.add(this.employeeForm.value);
    // }
    // this.router.navigateByUrl('/employees')

    (this.isEditing?
      this.employeeService.update(this.employeeForm.value):
      this.employeeService.add(this.employeeForm.value)
    ).subscribe({
              next: data => this.router.navigateByUrl('/employees'),
              error: err=> console.log(err)
    });

  }
}
