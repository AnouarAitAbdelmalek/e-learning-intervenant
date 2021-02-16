import { Formation } from 'src/app/formation/model/formation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormationService } from '../service/formation.service';
import { Seance } from 'src/app/seance/model/seance';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  formation: Formation = new Formation;

  seances: Seance[] = [];



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, 
    public dialog: MatDialog,
    private formationService: FormationService
  ) {}


  ngOnInit(): void {
    this. formationService.find(this.activatedRoute.snapshot.params['id']).subscribe(
      (data) => {
        this.formation=data;
        this.seances=this.formation.seances;
      }
    );
  }


  goToSeance(id: number) {
    this.router.navigate(['/seance/'+id]);
  }

  goToEvaluation(id: number) {
    this.router.navigate(['formation/'+id+'/evaluation']);
  }

}
