import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'newEmployee', component: EmployeeCreateComponent },
  { path: 'updateEmployee/:id', component: EmployeeCreateComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
