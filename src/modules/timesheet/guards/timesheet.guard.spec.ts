import { TestBed } from '@angular/core/testing';

import { TimesheetGuard } from './timesheet.guard';

describe('Timesheet Guards', () => {
    let timesheetGuard: TimesheetGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [TimesheetGuard],
        });
        timesheetGuard = TestBed.inject(TimesheetGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            timesheetGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
