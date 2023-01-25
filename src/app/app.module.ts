import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeeService } from './services/employee.service';
import { CardComponent } from './components/card/card.component';
import { ButtonDefaultComponent } from './components/button-default/button-default.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeCreateComponent,
    CardComponent,
    ButtonDefaultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
