import { TestBed } from '@angular/core/testing';

import { MyRequestService } from './my-request.service';

describe('MyRequestService', () => {
    let myRequestService: MyRequestService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MyRequestService],
        });
        myRequestService = TestBed.inject(MyRequestService);
    });

    describe('getMyRequest$', () => {
        it('should return Observable<MyRequest>', () => {
            expect(myRequestService).toBeDefined();
        });
    });
});
