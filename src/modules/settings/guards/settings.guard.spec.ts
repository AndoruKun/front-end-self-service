import { TestBed } from '@angular/core/testing';

import { SettingsGuard } from './settings.guard';

describe('Settings Guards', () => {
    let settingsGuard: SettingsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [SettingsGuard],
        });
        settingsGuard = TestBed.inject(SettingsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            settingsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
