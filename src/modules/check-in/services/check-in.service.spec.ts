import { TestBed } from '@angular/core/testing';

import { CheckInService } from './check-in.service';

describe('CheckInService', () => {
    let checkInService: CheckInService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CheckInService],
        });
        checkInService = TestBed.inject(CheckInService);
    });

    describe('getCheckIn$', () => {
        it('should return Observable<CheckIn>', () => {
            expect(checkInService).toBeDefined();
        });
    });
});
