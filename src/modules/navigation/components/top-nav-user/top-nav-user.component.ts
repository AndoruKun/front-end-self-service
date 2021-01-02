import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { MethodServices } from '../../../../service/method-service';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})

export class TopNavUserComponent implements OnInit {


    constructor(public userService: UserService,
                private methodServices:MethodServices,
                private router:Router) {}
    ngOnInit() {}

    logout() {
        if (typeof (Storage) !== 'undefined' && localStorage.getItem('Token') !== null) {
            localStorage.removeItem('Token');
            this.methodServices.userAuthorities = [];
        }
        this.router.navigate(["/auth/login"]);
    }
}
