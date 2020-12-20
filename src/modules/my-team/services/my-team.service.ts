import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MyTeamService {
    constructor() {}

    getMyTeam$(): Observable<{}> {
        return of({});
    }

}
