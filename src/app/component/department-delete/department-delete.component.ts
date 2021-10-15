import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/domain/department';
import { DepartmentService } from 'src/app/service/department.service';
import{Router, ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  public id: number = 0;
  public department: Department = new Department(0,'',0, new Date(),0);
  
  public showMsg: boolean = false;
  public msg : string = '';
  public type: string = '';

  
  constructor(public departmentService: DepartmentService, 
    public router: Router, 
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
getById(){
let param = this.activatedRoute.snapshot.paramMap.get('id');
this.id = Number(param);

this.departmentService.getById(this.id).subscribe(data =>{
  this.department = data;
})
}

  public delete(){

this.departmentService.delete(this.department.DepartmentID).subscribe(data => {
  
this.router.navigate(['department-list']);

}, error =>{
  this.showMsg = true;
  this.msg = 'The field  Name is required';
  this.type = 'danger';
});

  }

}



