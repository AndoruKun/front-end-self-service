import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class FamilyService {
    constructor() {}

    getFamily$(): Observable<{}> {
        return of({});
    }

}
