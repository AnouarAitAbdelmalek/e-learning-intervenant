import { Formation } from './../model/formation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntervenantService } from 'src/app/intervenant/service/intervenant.service';
import { Seance } from 'src/app/seance/model/seance';
import { Evaluation } from 'src/app/evaluation/model/evaluation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formationUrl: string;
  

  constructor(
    private http: HttpClient,
    private intervenantService: IntervenantService
    ) {
    this.formationUrl = 'http://localhost:8081/api/formation';
  }

  public find(id: number): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.formationUrl}s?id=${id}`);
  }

  public findSeances(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${this.formationUrl}/${id}/seances`);
  }

  public saveEvaluation(id:number,evaluation:Evaluation)
  {
    return this.http.post<Evaluation>(this.formationUrl+"/"+id+"/evaluation",evaluation);
  }



  
}
