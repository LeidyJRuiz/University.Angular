import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  public course: Course = new Course(0,'',0);
  

  public showMsg: boolean = false;
  public msg : string = '';
  public type: string = '';

  
  constructor(public courseService: CourseService, public router: Router) { }

  ngOnInit(): void {
  }
  public create(){
if(this.course.Title === ''){
  this.showMsg = true;
  this.msg = 'The field Title is required';
  this.type = 'warning';
  return;
}
this.courseService.create(this.course).subscribe(data => {
  
this.router.navigate(['course-list']);

}, error =>{
  this.showMsg = true;
  this.msg = 'The field Title is required';
  this.type = 'danger';
});

  }

}



