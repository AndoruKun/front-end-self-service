import { TestBed } from '@angular/core/testing';

import { EmploymentGuard } from './employment.guard';

describe('Employment Guards', () => {
    let employmentGuard: EmploymentGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [EmploymentGuard],
        });
        employmentGuard = TestBed.inject(EmploymentGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            employmentGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
