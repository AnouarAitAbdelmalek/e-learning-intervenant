import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatEvaluationComponent } from './resultat-evaluation.component';

describe('ResultatEvaluationComponent', () => {
  let component: ResultatEvaluationComponent;
  let fixture: ComponentFixture<ResultatEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
