import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) => {
        this.employees = response;
      },
      (error:HttpErrorResponse) => {
        console.error(error)
        alert(error.message);
      }
    )
  }

}
