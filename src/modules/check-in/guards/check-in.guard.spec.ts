import { TestBed } from '@angular/core/testing';

import { CheckInGuard } from './check-in.guard';

describe('CheckIn Guards', () => {
    let checkInGuard: CheckInGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [CheckInGuard],
        });
        checkInGuard = TestBed.inject(CheckInGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            checkInGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
