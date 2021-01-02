import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() isActive!: boolean;

    expanded = false;
    routeData!: SBRouteData;
    checkAccess:any

    constructor(
        private methodService:MethodServices
    ) {}
    ngOnInit() {
        this.checkAccess = (checkAccess:any) => this.methodService.checkAccessAuthorization(checkAccess)
    }
}
