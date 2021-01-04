import { TestBed } from '@angular/core/testing';

import { FamilyGuard } from './family.guard';

describe('Family Guards', () => {
    let familyGuard: FamilyGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [FamilyGuard],
        });
        familyGuard = TestBed.inject(FamilyGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            familyGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
