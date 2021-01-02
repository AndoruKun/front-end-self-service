import { TestBed } from '@angular/core/testing';

import { ApprovalGuard } from './approval.guard';

describe('Approval Guards', () => {
    let approvalGuard: ApprovalGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ApprovalGuard],
        });
        approvalGuard = TestBed.inject(ApprovalGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            approvalGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
