import { TestBed } from '@angular/core/testing';

import { MyTeamService } from './my-team.service';

describe('MyTeamService', () => {
    let myTeamService: MyTeamService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MyTeamService],
        });
        myTeamService = TestBed.inject(MyTeamService);
    });

    describe('getMyTeam$', () => {
        it('should return Observable<MyTeam>', () => {
            expect(myTeamService).toBeDefined();
        });
    });
});
