import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/domain/office';
import { OfficeService } from 'src/app/service/office.service';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/service/instructor.service';
import { Instructor } from 'src/app/domain/instructor';

@Component({
  selector: 'app-office-create',
  templateUrl: './office-create.component.html',
  styleUrls: ['./office-create.component.css']
})
export class OfficeCreateComponent implements OnInit {

   public instructors: Instructor[] = [];

  public office: Office = new Office(0,'');
  

  public showMsg: boolean = false;
  public msg : string = '';
  public type: string = '';

  
  constructor(public officeService: OfficeService, public instructorService:InstructorService,
    public router: Router) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }
  getAllInstructors(){
    this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
    });
  }
  
  public create(){
if(this.office.Location === ''){
  this.showMsg = true;
  this.msg = 'The field Location is required';
  this.type = 'warning';
  return;
}
this.officeService.create(this.office).subscribe(data => {
  
this.router.navigate(['office-list']);

}, error =>{
  this.showMsg = true;
  this.msg = 'The field Location is required';
  this.type = 'danger';
});

  }

}

