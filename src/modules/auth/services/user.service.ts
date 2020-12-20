import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';

import { User } from '../models';
import { MethodServices } from '../../../service/method-service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);
@Injectable({ providedIn: 'root' })


export class UserService {


    constructor(private methodService:MethodServices,
                private http:HttpClient) {

        this.methodService.getUrlApi('/api/v1/employee',
            localStorage.getItem('Token'),
            (res:any) => {
                this.user = {
                    firstName: res.firstName,
                    lastName: res.lastName,
                    email: res.email,
                    employeeNo: res.employeeNo
                }
            })
    }

    set user(user: User) {
        console.log(user)
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }
}
