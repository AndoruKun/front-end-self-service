import { TestBed } from '@angular/core/testing';

import { SelfServiceService } from './self-service.service';

describe('SelfServiceService', () => {
    let selfServiceService: SelfServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SelfServiceService],
        });
        selfServiceService = TestBed.inject(SelfServiceService);
    });

    describe('getSelfService$', () => {
        it('should return Observable<SelfService>', () => {
            expect(selfServiceService).toBeDefined();
        });
    });
});
