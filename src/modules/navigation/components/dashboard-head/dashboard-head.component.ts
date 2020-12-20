import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-dashboard-head',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-head.component.html',
    styleUrls: ['dashboard-head.component.scss'],
})
export class DashboardHeadComponent implements OnInit {
    @Input() title!: string;
    @Input() hideBreadcrumbs = false;

    constructor() {}
    ngOnInit() {

    }
}
