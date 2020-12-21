import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-self-service',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './self-service.component.html',
    styleUrls: ['self-service.component.scss'],
})
export class SelfServiceComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
