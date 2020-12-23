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
                    employeeNo: res.employeeNo,
                    birthDate: res.birthDate,
                    familyCardNo: res.familyCardNo,
                    lastEducation: res.lastEducation,
                    maritialStatus: res.maritialStatus,
                    mobilePhone: res.mobilePhone,
                    npwpNo: res.npwpNo,
                    ktpNo: res.ktpNo,
                    bloodType: res.bloodType,
                    nationality: res.nationality,
                    bpjsNo: res.bpjsNo,
                    religion: res.religion
                }
            })
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }

    getItems() {
        return this.user$;
    }
}
