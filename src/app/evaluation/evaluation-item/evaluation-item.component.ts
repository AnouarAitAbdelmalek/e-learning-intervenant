import { Formation } from 'src/app/formation/model/formation';
import { ConfirmationDialogComponent } from './../../shared/confirmation-dialog/confirmation-dialog.component';
import { Question } from './../model/question';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { EvaluationService } from './../service/evaluation.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../model/evaluation';
import { FormationService } from 'src/app/formation/service/formation.service';

@Component({
  selector: 'app-evaluation-item',
  templateUrl: './evaluation-item.component.html',
  styleUrls: ['./evaluation-item.component.css']
})
export class EvaluationItemComponent implements OnInit {
  hasEvaluation:Boolean=false;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, 
    public dialog: MatDialog,
    private evaluationService: EvaluationService,
    private formationService: FormationService,
    private formBuilder: FormBuilder) {
     }
     formation: Formation = new Formation();
    evaluation: Evaluation = new Evaluation();
    questionForm: FormGroup = new FormGroup({});
    choix!: FormArray;
    questions: Question[] = [];
    
    // hour!: number;

    // creneauForm : FormGroup = new FormGroup({
    //   jour: new FormControl(this.evaluation.date, Validators.required),
    //   creneau: new FormControl(this.hour, Validators.required)
    // });

    // get jour() {
    //   return this.creneauForm.get('jour');
    // }
  
    // get creneau() {
    //   return this.creneauForm.get('creneau');
    // }
    

    get enonce() {
      return this.questionForm.get('enonce');
    }


    getControls() {
      return (this.questionForm.get('choix') as FormArray).controls;
    }

    // onCreneauSubmit() {

    // }


  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];

    // let date = new Date;
    

    this.formationService.find(id).subscribe(
      (data) => {
        this.formation = data[0];
        //this.questions=this.formation.evaluation.questions;
        console.log(this.formation);

    //     date = this.evaluation.date;
    // if(date.getHours() === 8)
    //   this.hour=1;
    // if(date.getHours() === 10)
    //   this.hour=2;
    //   if(date.getHours() === 14)
    //   this.hour=3;
    //   if(date.getHours() === 16)
    //   this.hour=4;
       }
    );

    this.questionForm = this.formBuilder.group({
      enonce: '',
      choix: this.formBuilder.array([]),
      bonneReponse: '',
      numeroDeQuestion: ''
    })
    
  }

  createChoix(): FormGroup {
    return this.formBuilder.group({
      id: '',
      valeurChoix: ''
    })
  }

  addChoix(): void {
    this.choix = this.questionForm.get('choix') as FormArray;
    this.choix.push(this.createChoix());
    console.log(this.choix);
  }

  deleteChoix(i: number): void {
    this.choix.removeAt(i);
    console.log(this.choix);
  }


  onQuestionSubmit(){
    let question = new Question();
    question = this.questionForm.value;
    console.log(question);
    if(this.questions===null) question.numeroDeQuestion=1;
    else  question.numeroDeQuestion = this.questions.length+1;

    
    this.questions.push(question);
    this.evaluation.questions.push(question);

    
    this.formation.evaluation = this.evaluation;
    console.log(this.formation);

    this.questionForm = this.formBuilder.group({
      enonce: '',
      choix: this.formBuilder.array([]),
      bonneReponse: '',
      numeroDeQuestion: ''
    })

  }
  onEvaluationSubmit()
  {
    let id = this.activatedRoute.snapshot.params['id'];
    this.formationService.saveEvaluation(id,this.evaluation).subscribe(result=>
      {
        this.router.navigate(['formation/'+id]);
      });
    
  }



  deleteQuestion(question: Question) {
    console.log(this.evaluation);
    // const index: number = this.questions.indexOf(question);
    // if(index != -1)
    // {

    //   this.questionService.delete(question.id).subscribe(
    //     (data) =>{
    //       this.questions.splice(index,1);
    //       this.evaluation.questions= this.questions;
          
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )

    //   this.evaluationService.update(this.evaluation.id,this.evaluation).subscribe(
    //     (data) => {
    //       this.evaluation=data;
    //       this.questions=this.evaluation.questions;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
    // }
  }

  openDialog(question: Question ): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: "Voulez vous supprimer la question " + question.numeroDeQuestion + '?',
        supp: question,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteQuestion(result.data.supp);
      }
    });
  }

}
