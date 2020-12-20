import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CheckInService {
    constructor() {}

    getCheckIn$(): Observable<{}> {
        return of({});
    }
}
