import { TestBed } from '@angular/core/testing';

import { ReportsGuard } from './reports.guard';

describe('Reports Guards', () => {
    let reportsGuard: ReportsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ReportsGuard],
        });
        reportsGuard = TestBed.inject(ReportsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            reportsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
