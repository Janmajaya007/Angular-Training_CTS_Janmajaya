import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees:Employee[];

  constructor(private employeeService: EmployeeService){
    this.employees=this.employeeService.getAll();

  }

  deleteEmployee(id: number){
    this.employeeService.deleteById(id);
    this.employees=this.employeeService.getAll();
  }
}
