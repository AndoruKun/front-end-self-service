import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MethodServices } from '../../../../service/method-service';
import { User } from '@modules/auth/models/auth.model';
import { UserService } from '@modules/auth/services';


@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private router:Router,private location:Location, private methodServices:MethodServices, private userService:UserService){
    }
    ngOnInit() {
        if (localStorage.getItem('Token') == null) {
            this.router.navigate(["/auth/login"])
        }

        if (this.methodServices.userAuthorities.length == 0)
            this.methodServices.decodeJWT(localStorage.getItem('Token'))

        this.methodServices.getUrlApi('/api/v1/employee',
            localStorage.getItem('Token'),
            (res:any) => {
                this.userService.user = res;
            })
    }
}
