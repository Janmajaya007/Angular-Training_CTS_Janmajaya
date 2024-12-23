import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';
import { MessageBoxComponent } from "../message-box/message-box.component";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, MessageBoxComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  // employees:Employee[];

  // constructor(private employeeService: EmployeeService){
  //   this.employees=this.employeeService.getAll();

  // }

  // deleteEmployee(id: number){
  //   this.employeeService.deleteById(id);
  //   this.employees=this.employeeService.getAll();
  // }
  
  employees!:Employee[];
  erorMssg!:string;

  constructor(private employeeService: EmployeeService){
    // this.contacts=this.contactService.getAll();

  }
  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.employeeService.getAll().subscribe({
      next: data => this.employees=data,
      error: err => {console.error(err); this.erorMssg="Unable to load Data! Please try later!"}
    })
  }
  // deleteContact(id: number){
  //   this.contactService.deleteById(id);
  //   this.contacts=this.contactService.getAll();
  // }
  delete(id:number){
    this.employeeService.deleteById(id).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err); this.erorMssg="Unable to remove the record! Please try later!"}
    })
  }
}
