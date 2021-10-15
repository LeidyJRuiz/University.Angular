import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Office } from '../domain/office';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  public url: string= "";

  constructor(public httpClient: HttpClient) { 
    this.url = environment.apiUrl + 'api/OfficeAssignments/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url );
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url  + id);
  }

  public create(office: Office): Observable<any>{
    return this.httpClient.post(this.url, office );
  }

  public edit(office: Office): Observable<any>{
    return this.httpClient.put(this.url + office.InstructorID, office );
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.url  + id);
  }
}

