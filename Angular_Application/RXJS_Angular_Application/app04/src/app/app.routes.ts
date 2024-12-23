import { EmployeeListComponent } from './shared/employee-list/employee-list.component';
import { Routes } from '@angular/router';
import { ContactListsComponent } from './shared/contact-lists/contact-lists.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { EmployeeFormComponent } from './shared/employee-form/employee-form.component';

export const routes: Routes = [
    {path:"", pathMatch:'full', redirectTo:"/contacts"},
    {path:"contacts", component:ContactListsComponent},
    {path:"addContact", component:ContactFormComponent},
    {path:"editContact/:id", component:ContactFormComponent},
    {path:"employees", component:EmployeeListComponent},
    {path:"addEmployee", component:EmployeeFormComponent},
    {path:"editEmployee/:id", component:EmployeeFormComponent}
];
