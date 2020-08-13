import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-testimonials3',
  templateUrl: './testimonials3.component.html',
  styleUrls: ['./testimonials3.component.css']
})
export class Testimonials3Component implements OnInit {

  public employess = [];

 
 
  first_Name: any;
  avatar: any;


  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
   this._employeeService.getEmpolyees()
   .subscribe(data => this.employess = data);
  }

}
