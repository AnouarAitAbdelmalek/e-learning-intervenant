import { IntervenantService } from './../../intervenant/service/intervenant.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  FORMATIONS: Formation[] = [];
  id: number = this.activatedRoute.snapshot.params['id'];



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Formation> = new MatTableDataSource<Formation>(this.FORMATIONS);
  constructor
  (
    private intervenantService: IntervenantService, 
    private changeDetectorRef: ChangeDetectorRef, 
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private route: Router) {
      
    }

    

  ngOnInit(): void {
    
      this.intervenantService.find(this.id).subscribe(
        (data) => {
          this.FORMATIONS = data.formations;
          this.dataSource.data= this.FORMATIONS;
          console.log(this.FORMATIONS)
        }, (error) => console.log(error)
      );
    
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

  goToFormation(id: number){
    this.route.navigate(['/formation/'+id]);
  }

  goToEtudiants(id: number) {
    this.route.navigate(['/formation/'+id+'/etudiants']);
  }
  

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
