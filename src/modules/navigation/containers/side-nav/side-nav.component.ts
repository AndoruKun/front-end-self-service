import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
import { MethodServices } from '../../../../service/method-service';
import { User } from '@modules/auth/models';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];

    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;
    userData:any;
    canAccessPermission:any;

    constructor(
        public navigationService: NavigationService,
        public userService: UserService,
        private methodServices:MethodServices) {}

    ngOnInit() {
        if (this.methodServices.userAuthorities.length == 0)
            this.methodServices.decodeJWT(localStorage.getItem('Token'))

        this.canAccessPermission = (accessPermission:any) => this.methodServices.checkAccessAuthorization(accessPermission)
        console.log("=== [User Access] ===")
        console.log(this.methodServices.userAuthorities)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
