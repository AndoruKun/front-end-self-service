import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SettingsService {
    constructor() {}

    getSettings$(): Observable<{}> {
        return of({});
    }

}
