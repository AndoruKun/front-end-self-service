import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmploymentService {
    constructor() {}

    getEmployment$(): Observable<{}> {
        return of({});
    }

}
