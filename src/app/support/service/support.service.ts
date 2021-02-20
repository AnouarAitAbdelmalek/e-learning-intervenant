import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Support } from './../model/support';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  private supportUrl: string;
  

  constructor(
    private http: HttpClient
    ) {
    this.supportUrl = 'http://localhost:8081/api/support';
  }

  public find(id: number): Observable<Support> {
    return this.http.get<Support>(`${this.supportUrl}s/${id}`);
  }

  public findAll(): Observable<Support[]> {
    return this.http.get<Support[]>(this.supportUrl+"s");
  }

  public save(support: Support) {
    return this.http.post<Support>(this.supportUrl+"s", support);
  }

  delete(id: number): Observable<any> {

    return this.http.delete(`${this.supportUrl}/${id}`);
  }

}
