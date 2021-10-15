import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Course } from '../domain/course';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public url: string= "";

  constructor(public httpClient: HttpClient) { 
    this.url = environment.apiUrl + 'api/Courses/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url + 'GetCourses/');
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + 'GetCourse/' + id);
  }

  public create(course: Course): Observable<any>{
    return this.httpClient.post(this.url, course );
  }

  public edit(course: Course): Observable<any>{
    return this.httpClient.put(this.url + course.CourseID, course );
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.url  + id);
  }
}
