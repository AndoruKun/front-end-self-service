import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private router:Router,private location:Location){
    }
    ngOnInit() {
        if (localStorage.getItem('Token') == null) {
            this.router.navigate(["/auth/login"])
        }
    }
}
