import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormationService } from 'src/app/formation/service/formation.service';
import { Etudiant } from '../model/etudiant';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  ETUDIANTS: Etudiant[] = [];
  id: number = this.activatedRoute.snapshot.params['id'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Etudiant> = new MatTableDataSource<Etudiant>(this.ETUDIANTS);
  constructor
  (private formationService: FormationService, 
    private changeDetectorRef: ChangeDetectorRef, 
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.formationService.find(this.id).subscribe(
      (data) => {
        this.ETUDIANTS = data[0].etudiants;
        this.dataSource.data= this.ETUDIANTS;
      },
      (error) => console.log(error)
    );
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
