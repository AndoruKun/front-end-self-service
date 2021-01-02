import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MethodServices } from '../../../service/method-service';

@Injectable()
export class MyRequestGuard implements CanActivate {
    constructor(private router:Router
        ,private methodServices:MethodServices){}

    canActivate(): Observable<boolean> {
        if (this.methodServices.checkAccessAuthorization("EMPLOYEE")) {
            return of(true)
        } else {
            alert("You are not allow")
            this.router.navigate(['/dashboard'])
            return of(false);
        }

    }
}
