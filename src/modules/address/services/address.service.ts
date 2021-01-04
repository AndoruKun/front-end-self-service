import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AddressService {
    constructor() {}

    getAddress$(): Observable<{}> {
        return of({});
    }

}
