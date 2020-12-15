import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';

@Injectable()
export class AppCommonGuard implements CanActivate {
    constructor(private router:Router,private location:Location){
    }
    canActivate(): Observable<boolean> {
        if (typeof localStorage.getItem('Token') === 'undefined' || localStorage.getItem('Token') === '') {
            this.router.navigate(["/auth/login"])
            return of(false);
        } else {
            return of(true)
        }
    }
}
