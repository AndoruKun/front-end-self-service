import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MethodServices } from '../../../service/method-service';

@Injectable()
export class MyTeamGuard implements CanActivate {
    constructor(
        private methodServices:MethodServices,
        private router:Router
    ) {
    }
    canActivate(): Observable<boolean> {
        if (this.methodServices.checkAccessAuthorization('MANAGER'))
            return of(true);
        else {
            alert("You don't have permission to this location")
            this.router.navigate(['/dashboard'])
            return of(false)
        }
    }
}
