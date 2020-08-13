import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public employess = [];

 
 
  first_Name: any;
  avatar: any;


  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
   this._employeeService.getEmpolyees()
   .subscribe(data => this.employess = data);
  }

}
