import { TestBed } from '@angular/core/testing';

import { ProfileGuard } from './profile.guard';

describe('Profile Guards', () => {
    let profileGuard: ProfileGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ProfileGuard],
        });
        profileGuard = TestBed.inject(ProfileGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            profileGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
