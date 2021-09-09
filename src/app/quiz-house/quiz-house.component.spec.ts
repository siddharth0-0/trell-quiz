import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHouseComponent } from './quiz-house.component';

describe('QuizHouseComponent', () => {
  let component: QuizHouseComponent;
  let fixture: ComponentFixture<QuizHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
