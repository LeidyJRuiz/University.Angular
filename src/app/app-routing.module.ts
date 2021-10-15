import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { OfficeCreateComponent } from './component/office-create/office-create.component';
import { OfficeDeleteComponent } from './component/office-delete/office-delete.component';
import { OfficeEditComponent } from './component/office-edit/office-edit.component';
import { OfficeListComponent } from './component/office-list/office-list.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';

const routes: Routes = [
  {path:'student-list', component: StudentListComponent},
  {path:'student-create', component: StudentCreateComponent},
  {path:'student-edit/:id', component: StudentEditComponent},
  {path:'student-delete/:id', component: StudentDeleteComponent},
  {path:'department-create', component: DepartmentCreateComponent},
  {path:'department-edit/:id', component: DepartmentEditComponent},
  {path:'department-list', component: DepartmentListComponent},
  {path:'department-delete/:id', component: DepartmentDeleteComponent},
  {path:'course-list', component: CourseListComponent},
  {path:'course-create', component: CourseCreateComponent},
  {path:'course-edit/:id', component: CourseEditComponent},
  {path:'course-delete/:id', component: CourseDeleteComponent},
  {path:'instructor-list', component: InstructorListComponent},
  {path:'instructor-create', component: InstructorCreateComponent},
  {path:'instructor-edit/:id', component: InstructorEditComponent},
  {path:'instructor-delete/:id', component: InstructorDeleteComponent},
  {path:'office-list', component: OfficeListComponent},
  {path:'office-create', component: OfficeCreateComponent},
  {path:'office-edit/:id', component: OfficeEditComponent},
  {path:'office-delete/:id', component: OfficeDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
