import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MethodServices } from '../../../service/method-service';

@Injectable()
export class AuthService {
    constructor(private methodService:MethodServices) {}

    getAuth$(): Observable<{}> {
        return of({});
    }
}
