import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MethodServices } from '../../../service/method-service';

@Injectable()
export class ReportsGuard implements CanActivate {
    constructor(
        private router:Router,
        private methodServices:MethodServices
    ) {}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        let getUrl = state.url.split('/')
        let access:boolean = false
        if (getUrl.indexOf('reports') >= 0 && (this.methodServices.checkAccessAuthorization('HRADMIN') || this.methodServices.checkAccessAuthorization('MANAGER'))) {
            if (getUrl.indexOf('personal') >= 0 && this.methodServices.checkAccessAuthorization('HRADMIN'))
                access = true

            if (getUrl.indexOf('personal') == -1 && this.methodServices.checkAccessAuthorization('MANAGER'))
                access = true

            if (!access) {
                alert("You don't have permission to this location")
                this.router.navigate(['/dashboard'])
            }
            return of(access)
        } else {
            alert("You don't have permission to this location")
            this.router.navigate(['/dashboard'])
            return of(false)
        }
    }
}
