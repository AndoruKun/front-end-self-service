import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sb-fab',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './fab.component.html',
    styleUrls: ['fab.component.scss'],
})
export class FabComponent implements OnInit {
    @Input() urlDirect!: string;
    constructor() {}
    ngOnInit() {}
}
