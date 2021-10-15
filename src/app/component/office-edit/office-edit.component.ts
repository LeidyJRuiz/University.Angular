import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/domain/office';
import { OfficeService } from 'src/app/service/office.service';
import { Router,ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/service/instructor.service';
import { Instructor } from 'src/app/domain/instructor';

@Component({
  selector: 'app-office-edit',
  templateUrl: './office-edit.component.html',
  styleUrls: ['./office-edit.component.css']
})
export class OfficeEditComponent implements OnInit {

  public instructors: Instructor[] = [];

  public office: Office = new Office(0, '');
  
  public id:number =0;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';


  constructor(public officeService: OfficeService,
    public instructorService:InstructorService,
    public activatedRoute : ActivatedRoute,
     public router: Router) { }

  ngOnInit(): void {
    this.getAllInstructors();
    this.getById();
  }
getAllInstructors(){
this.instructorService.getAll().subscribe(data => {
  this.instructors = data;
});

}

getById(){

  let param = this.activatedRoute.snapshot.paramMap.get('id');
  this.id = Number(param);

  this.officeService.getById(this.id).subscribe(data =>{
    this.office = data;
  });
}

  public edit() {
    if (this.office.Location === '') {
      this.showMsg = true;
      this.msg = 'The field  Location is required';
      this.type = 'warning';
      return;
    }
    this.officeService.edit(this.office).subscribe(data => {

      this.router.navigate(['office-list']);

    }, error => {
      this.showMsg = true;
      this.msg = 'The field Location is required';
      this.type = 'danger';
    });

  }


}


