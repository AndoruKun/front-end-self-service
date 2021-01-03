import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-reports',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './reports.component.html',
    styleUrls: ['reports.component.scss'],
})
export class ReportsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
