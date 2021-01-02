import { TestBed } from '@angular/core/testing';

import { MyRequestGuard } from './my-request.guard';

describe('MyRequest Guards', () => {
    let myRequestGuard: MyRequestGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [MyRequestGuard],
        });
        myRequestGuard = TestBed.inject(MyRequestGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            myRequestGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
