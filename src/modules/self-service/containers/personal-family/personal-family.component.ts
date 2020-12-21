import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-personal-family',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './personal-family.component.html',
    styleUrls: ['personal-family.component.scss'],
})
export class PersonalFamilyComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
