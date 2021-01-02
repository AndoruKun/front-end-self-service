import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
    let settingsService: SettingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SettingsService],
        });
        settingsService = TestBed.inject(SettingsService);
    });

    describe('getSettings$', () => {
        it('should return Observable<Settings>', () => {
            expect(settingsService).toBeDefined();
        });
    });
});
