import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common'

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate {
    constructor(private router:Router,private location:Location){
    }
    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        if (typeof localStorage.getItem('Token') === 'undefined' || localStorage.getItem('Token') === '') {
            return of(true);
        } else {
            this.router.navigate(["/"])
            return of(false)
        }
    }
}
