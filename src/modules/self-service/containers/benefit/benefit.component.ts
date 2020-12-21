import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-benefit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './benefit.component.html',
    styleUrls: ['benefit.component.scss'],
})
export class BenefitComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
