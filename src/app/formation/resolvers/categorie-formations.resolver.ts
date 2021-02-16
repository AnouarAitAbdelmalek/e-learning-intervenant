import { Observable } from 'rxjs';
import { Formation } from 'src/app/formation/model/formation';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { FormationService } from '../service/formation.service';
@Injectable()
export class CategorieFormationsResolver implements Resolve<Formation[]> {
  constructor(private formations: FormationService, public route: ActivatedRoute) {}
  resolve(): Observable<Formation[]> {
      const idCat = Number(this.route.snapshot.paramMap.get('idCat'));
    return this.formations.findByCategorie(idCat);
  } 
}