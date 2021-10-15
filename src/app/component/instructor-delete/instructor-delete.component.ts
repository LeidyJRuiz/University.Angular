import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';
import{Router, ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-instructor-delete',
  templateUrl: './instructor-delete.component.html',
  styleUrls: ['./instructor-delete.component.css']
})
export class InstructorDeleteComponent implements OnInit {

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

  public delete(){

this.instructorService.delete(this.instructor.ID).subscribe(data => {
  
this.router.navigate(['instructor-list']);

}, error =>{
  this.showMsg = true;
  this.msg = 'The field Last Name is required';
  this.type = 'danger';
});

  }

}


