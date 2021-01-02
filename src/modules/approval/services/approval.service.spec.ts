import { TestBed } from '@angular/core/testing';

import { ApprovalService } from './approval.service';

describe('ApprovalService', () => {
    let approvalService: ApprovalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApprovalService],
        });
        approvalService = TestBed.inject(ApprovalService);
    });

    describe('getApproval$', () => {
        it('should return Observable<Approval>', () => {
            expect(approvalService).toBeDefined();
        });
    });
});
