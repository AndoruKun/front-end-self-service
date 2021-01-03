import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ReportsService {
    constructor() {}

    getReports$(): Observable<{}> {
        return of({});
    }

}
