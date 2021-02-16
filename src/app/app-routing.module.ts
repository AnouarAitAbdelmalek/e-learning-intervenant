import { EvaluationItemComponent } from './evaluation/evaluation-item/evaluation-item.component';
import { AcceuilComponent } from './shared/acceuil/acceuil.component';
import { SeanceItemComponent } from './seance/seance-item/seance-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';;
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { FormationItemComponent } from './formation/formation-item/formation-item.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './authentification/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: '',
        redirectTo: 'acceuil',
        pathMatch: 'full',
      },
      {
        path: 'acceuil',
        component: AcceuilComponent,
      },
      {
        path: 'intervenant/:id/formations',
        component: FormationListComponent,
      },

      {
        path: 'formation/:id',
        component: FormationItemComponent,
      },
      {
        path: 'formation/:id/etudiants',
        component: EtudiantListComponent,
      },
      {
        path: 'formation/:id/evaluation',
        component: EvaluationItemComponent,
      },
      {
        path: 'seance/:id',
        component: SeanceItemComponent,
      },     
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
