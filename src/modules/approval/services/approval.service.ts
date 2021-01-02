import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApprovalService {
    constructor() {}

    getApproval$(): Observable<{}> {
        return of({});
    }

}
