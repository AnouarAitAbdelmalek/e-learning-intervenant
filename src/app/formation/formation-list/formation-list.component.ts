import { IntervenantService } from './../../intervenant/service/intervenant.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';
import { Intervenant } from 'src/app/intervenant/model/intervenant';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  FORMATIONS: Formation[] = [];
  intervenant:Intervenant=new Intervenant();
  identifier:String="";
  



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
  if(sessionStorage.getItem('userId'))
  {
    this.identifier=sessionStorage.getItem('userId') || "0";
    console.log(this.identifier);
  }

    
      this.intervenantService.findFormations(this.identifier).subscribe(
        (data) => {
          this.FORMATIONS = data;
          this.dataSource.data= this.FORMATIONS;
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
