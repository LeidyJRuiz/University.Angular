import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';
import{Router, ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {

  public id: number = 0;
  public instructor: Instructor = new Instructor(0,'','', new   Date());
  
  public showMsg: boolean = false;
  public msg : string = '';
  public type: string = '';

  
  constructor(public instructorService: InstructorService, 
    public router: Router, 
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
getById(){
let param = this.activatedRoute.snapshot.paramMap.get('id');
this.id = Number(param);

this.instructorService.getById(this.id).subscribe(data =>{
  this.instructor = data;
})
}

  public edit(){
if(this.instructor.LastName === ''){
  this.showMsg = true;
  this.msg = 'The field Last Name is required';
  this.type = 'warning';
  return;
}
this.instructorService.edit(this.instructor).subscribe(data => {
  
this.router.navigate(['instructor-list']);

}, error =>{
  this.showMsg = true;
  this.msg = 'The field Last Name is required';
  this.type = 'danger';
});

  }

}


