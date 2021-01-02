import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MyRequestService {
    constructor() {}

    getMyRequest$(): Observable<{}> {
        return of({});
    }

}
