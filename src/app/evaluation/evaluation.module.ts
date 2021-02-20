import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationItemComponent } from './evaluation-item/evaluation-item.component';
import { SharedModule } from '../shared/shared.module';
import { ResultatEvaluationComponent } from '../evaluation/resultat-evaluation/resultat-evaluation.component';



@NgModule({
  declarations: [EvaluationItemComponent, ResultatEvaluationComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EvaluationModule { }
