import { TestBed } from '@angular/core/testing';

import { MyTeamGuard } from './my-team.guard';

describe('MyTeam Guards', () => {
    let myTeamGuard: MyTeamGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [MyTeamGuard],
        });
        myTeamGuard = TestBed.inject(MyTeamGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            myTeamGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
