import { NgModule } from '@angular/core';

import {HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms';

import {StudentService} from './service/student.service';
import {InstructorService} from './service/instructor.service';
import {DepartmentService} from './service/department.service';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    DepartmentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    InstructorService,
    DepartmentService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
