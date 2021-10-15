import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { Department } from 'src/app/domain/department';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, OnDestroy {

  public departments: Department[] = [];
  public subDepartments: Subscription = new Subscription;

  constructor(public departmentService: DepartmentService) { }
  ngOnDestroy(): void {
    this.subDepartments.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subDepartments = this.departmentService.getAll().subscribe(data => {
      this.departments = data;
    })

  }

}


