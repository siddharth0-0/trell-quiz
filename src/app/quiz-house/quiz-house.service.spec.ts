import { TestBed } from '@angular/core/testing';

import { QuizHouseService } from './quiz-house.service';

describe('QuizHouseService', () => {
  let service: QuizHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
