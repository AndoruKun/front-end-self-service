import { TestBed } from '@angular/core/testing';

import { CheckOutGuard } from './check-out.guard';

describe('CheckOut Guards', () => {
    let checkOutGuard: CheckOutGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [CheckOutGuard],
        });
        checkOutGuard = TestBed.inject(CheckOutGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            checkOutGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
