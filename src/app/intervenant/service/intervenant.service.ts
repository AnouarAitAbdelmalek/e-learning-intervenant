import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/formation/model/formation';
import { Intervenant } from '../model/intervenant';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  private intervenantUrl: string;

  constructor(private http: HttpClient) {
    this.intervenantUrl = 'http://localhost:8081/api/intervenant';
  }
  public findAll(): Observable<Intervenant[]> {
    return this.http.get<Intervenant[]>(this.intervenantUrl+"s");
  }

  public find(id: number): Observable<Intervenant> {
    return this.http.get<Intervenant>(`${this.intervenantUrl}s/${id}`);
  }

  public findFormations(id: String): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.intervenantUrl}/${id}/formations`);
  }



}
