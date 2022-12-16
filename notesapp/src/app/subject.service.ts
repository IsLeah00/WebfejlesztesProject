import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from './subject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getSubjectsList(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiServerUrl}/subject/all`);
  }
  public createSubject(subject: Subject): Observable<Object>{
    return this.http.post(`${this.apiServerUrl}/subject/add`, subject);
  }

  public getSubjectById(id: number): Observable<Subject>{
    return this.http.get<Subject>(`${this.apiServerUrl}/subject/${id}`);
  }

  public updateSubject(subject: Subject): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}/subject/update`, subject);
  }

  public deleteSubject(id: number): Observable<Object>{
    return this.http.delete(`${this.apiServerUrl}/subject/delete/${id}`);
  }
}
