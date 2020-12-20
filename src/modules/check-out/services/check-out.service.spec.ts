import { TestBed } from '@angular/core/testing';

import { CheckOutService } from './check-out.service';

describe('CheckOutService', () => {
    let checkOutService: CheckOutService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CheckOutService],
        });
        checkOutService = TestBed.inject(CheckOutService);
    });

    describe('getCheckOut$', () => {
        it('should return Observable<CheckOut>', () => {
            expect(checkOutService).toBeDefined();
        });
    });
});
