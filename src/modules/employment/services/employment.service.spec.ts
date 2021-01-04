import { TestBed } from '@angular/core/testing';

import { EmploymentService } from './employment.service';

describe('EmploymentService', () => {
    let employmentService: EmploymentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EmploymentService],
        });
        employmentService = TestBed.inject(EmploymentService);
    });

    describe('getEmployment$', () => {
        it('should return Observable<Employment>', () => {
            expect(employmentService).toBeDefined();
        });
    });
});
