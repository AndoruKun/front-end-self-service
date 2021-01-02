import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';

import { User } from '../models';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MethodServices } from '../../../service/method-service';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);
@Injectable({ providedIn: 'root' })


export class UserService {
    constructor(public methodService:MethodServices,
                private http:HttpClient) {
        this.methodService.getUrlApi('/api/v1/employee',
            localStorage.getItem('Token'),
            (res:any) => {
                this.user = res;
            })
    }


    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }
}
