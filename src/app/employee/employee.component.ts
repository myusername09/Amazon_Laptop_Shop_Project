import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit  {

employee:Employee={
  empid:12,
    empname:'Sharanya',
    empdesignation:'Java Full Stack Developer'

}

constructor(){ }
ngOnInit(): void{
  
}

}
