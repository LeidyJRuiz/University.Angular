import { Component, OnInit, OnDestroy } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { Instructor } from 'src/app/domain/instructor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit, OnDestroy {

  public instructors: Instructor[] = [];
  public subInstructors: Subscription = new Subscription;

  constructor(public instructorService: InstructorService) { }
  ngOnDestroy(): void {
    this.subInstructors.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subInstructors = this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
    })

  }

}


