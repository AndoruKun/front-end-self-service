import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CheckOutService {
    constructor() {}

    getCheckOut$(): Observable<{}> {
        return of({});
    }

}
