import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.interface';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = environment.baseUrl + "employee"
  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url)
  }

  public getEmployee(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+`/${id}`)
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.url,employee)
  }

  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(this.url,employee)
  }
  
  public deleteEmployee(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.url+`/${id}`)
  }
}
