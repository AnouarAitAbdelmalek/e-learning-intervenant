import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/formation/service/formation.service';
import { Passage } from '../model/passage';

@Component({
  selector: 'app-resultat-evaluation',
  templateUrl: './resultat-evaluation.component.html',
  styleUrls: ['./resultat-evaluation.component.css']
})
export class ResultatEvaluationComponent implements OnInit {

  passageFormation : Passage[] = [] ;

  constructor(
    private formationService : FormationService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.formationService.find(this.activatedRoute.snapshot.params['id']).subscribe(
      (data) => {
        this.passageFormation = data[0].evaluation.passages;
      }
    )
  }

}
