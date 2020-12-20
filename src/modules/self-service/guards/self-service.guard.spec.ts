import { TestBed } from '@angular/core/testing';

import { SelfServiceGuard } from './self-service.guard';

describe('SelfService Guards', () => {
    let selfServiceGuard: SelfServiceGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [SelfServiceGuard],
        });
        selfServiceGuard = TestBed.inject(SelfServiceGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            selfServiceGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
