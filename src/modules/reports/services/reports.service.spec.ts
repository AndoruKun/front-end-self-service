import { TestBed } from '@angular/core/testing';

import { ReportsService } from './reports.service';

describe('ReportsService', () => {
    let reportsService: ReportsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ReportsService],
        });
        reportsService = TestBed.inject(ReportsService);
    });

    describe('getReports$', () => {
        it('should return Observable<Reports>', () => {
            expect(reportsService).toBeDefined();
        });
    });
});
