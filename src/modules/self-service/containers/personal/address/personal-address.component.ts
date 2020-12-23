import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-personal-address',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './personal-address.component.html',
    styleUrls: ['personal-address.component.scss'],
})
export class PersonalAddressComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
