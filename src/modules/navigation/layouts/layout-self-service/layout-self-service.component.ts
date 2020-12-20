import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-layout-self-service',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-self-service.component.html',
    styleUrls: ['layout-self-service.component.scss'],
})
export class LayoutSelfServiceComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
