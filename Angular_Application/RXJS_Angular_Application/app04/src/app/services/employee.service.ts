import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpClient:HttpClient){
  }

  getAll(): Observable<Employee[]>{
      return this.httpClient.get<Employee[]>(environment.apiEmpUrl);
  }

  getAById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(environment.apiEmpUrl+ "/" + id);
}

  deleteById(id: number): Observable<void>{
  return this.httpClient.delete<void>(environment.apiEmpUrl+ "/" + id);
}

  add(employee: Employee): Observable<Employee>{
  return this.httpClient.post<Employee>(environment.apiEmpUrl, employee);
}

  update(employee: Employee): Observable<Employee>{
    return  this.httpClient.put<Employee>(environment.apiEmpUrl+ "/" + employee.id, employee);
  }

  // private employees:Employee[];
  // private nextId: number;
  // constructor() {
  //   this.employees=[
  //     {id:1, fullName:"Raghu Shrivastab",mobile:"9958963478",emailId:"raghu@gmail.com", department:"HR"},
  //     {id:2, fullName:"Shyam Natrajan",mobile:"9865321476",emailId:"shyam@gmail.com", department:"ASE"},
  //     {id:3, fullName:"Ritu Poonawala",mobile:"8965332175",emailId:"ritu@gmail.com", department:"SE"},
  //     {id:4, fullName:"Sourav Garg",mobile:"9874512360",emailId:"sourav@gmail.com",  department:"ID"}
  //   ];
  //   this.nextId=4;
  //  }

  //  getAll():Employee[]{
  //   return[...this.employees];
  //  }

  //  getById(eid:number): Employee | undefined{
  //   return this.employees.find(c =>c.id===eid)
  //  }

  //  add(c:Employee){
  //   c.id=++this.nextId;
  //   this.employees.push(c);
  //  }

  //  update(contact : Employee){
  //     let index = this.employees.findIndex(c => c.id === contact.id);

  //     if(index>-1){
  //       this.employees[index]=contact;
  //     }
  //  }

  //  deleteById(eid: number){
  //     let index =this.employees.findIndex(c => c.id===eid);
  //     if(index >-1){
  //       this.employees.splice(index, 1);
  //     }
  //  }
}
