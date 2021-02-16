import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FormationListComponent, FormationItemComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    SharedModule,
  ]
})
export class FormationModule { }
