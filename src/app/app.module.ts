import { SeanceModule } from './seance/seance.module';
import { CategorieModule } from './categorie/categorie.module';
import { IntervenantModule } from './intervenant/intervenant.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormationModule } from './formation/formation.module';
import { EtudiantModule } from './etudiant/etudiant.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupportModule } from './support/support.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './authentification/service/basic-auth-http-interceptor.service';
import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    EtudiantModule,
    IntervenantModule,
    FormationModule,
    CategorieModule,
    SeanceModule,
    //NgbModule,
    SupportModule,
    CommentaireModule,
    EvaluationModule,
    UtilisateurModule,
    AuthentificationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
