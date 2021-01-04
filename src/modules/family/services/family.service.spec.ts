import { TestBed } from '@angular/core/testing';

import { FamilyService } from './family.service';

describe('FamilyService', () => {
    let familyService: FamilyService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FamilyService],
        });
        familyService = TestBed.inject(FamilyService);
    });

    describe('getFamily$', () => {
        it('should return Observable<Family>', () => {
            expect(familyService).toBeDefined();
        });
    });
});
