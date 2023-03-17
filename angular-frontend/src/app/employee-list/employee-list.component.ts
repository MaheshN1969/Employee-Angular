import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];
  flag : Boolean;
  id : Number ;

  constructor(private employeeService : EmployeeService , private router : Router){

  }

  ngOnInit() : void
  {
        this.getEmployees();
  }

  private getEmployees()
  {
        this.employeeService.getEmployeeList().subscribe(data => {

              this.employees = data ;

        })
  }

updateEmployee(id : Number)
{
      this.router.navigate(["update-employee",id])
}

deleteEmployee(id : Number)
{
      this.id = id ;
      this.flag = confirm("Are you Sure ? \n ID : "+this.id);

      if(this.flag === true)
      {
           console.log("Process Initiated to delete Employee .... : ",this.flag);       
           
           this.router.navigate(["delete-employee",id])
            
      }

}

}
