import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';

@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private router:Router,private location:Location){
    }
    canActivate(): Observable<boolean> {
        if (localStorage.getItem('Token') == null) {
            return of(false);
        } else {
            return of(true)
        }
    }
}
