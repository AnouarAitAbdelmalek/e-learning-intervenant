import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EtudiantListComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    SharedModule
  ]
})
export class EtudiantModule { }
