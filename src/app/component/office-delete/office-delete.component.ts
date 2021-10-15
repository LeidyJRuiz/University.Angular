import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/domain/office';
import { OfficeService } from 'src/app/service/office.service';
import{Router, ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-office-delete',
  templateUrl: './office-delete.component.html',
  styleUrls: ['./office-delete.component.css']
})
export class OfficeDeleteComponent implements OnInit {

  public id: number = 0;
  public office: Office = new Office(0,'');
  
  public showMsg: boolean = false;
  public msg : string = '';
  public type: string = '';

  
  constructor(public officeService: OfficeService, 
    public router: Router, 
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
getById(){
let param = this.activatedRoute.snapshot.paramMap.get('id');
this.id = Number(param);

this.officeService.getById(this.id).subscribe(data =>{
  this.office = data;
})
}

  public delete(){

this.officeService.delete(this.office.InstructorID).subscribe(data => {
  
this.router.navigate(['office-list']);

}, error =>{
  this.showMsg = true;
  this.msg = 'The field  Location is required';
  this.type = 'danger';
});

  }

}


