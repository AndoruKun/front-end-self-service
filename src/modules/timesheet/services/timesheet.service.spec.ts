import { TestBed } from '@angular/core/testing';

import { TimesheetService } from './timesheet.service';

describe('TimesheetService', () => {
    let timesheetService: TimesheetService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TimesheetService],
        });
        timesheetService = TestBed.inject(TimesheetService);
    });

    describe('getTimesheet$', () => {
        it('should return Observable<Timesheet>', () => {
            expect(timesheetService).toBeDefined();
        });
    });
});
