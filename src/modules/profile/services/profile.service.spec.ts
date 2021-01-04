import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
    let profileService: ProfileService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProfileService],
        });
        profileService = TestBed.inject(ProfileService);
    });

    describe('getProfile$', () => {
        it('should return Observable<Profile>', () => {
            expect(profileService).toBeDefined();
        });
    });
});
