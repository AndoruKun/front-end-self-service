import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-personal-biodata',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './personal-biodata.component.html',
    styleUrls: ['personal-biodata.component.scss'],
})
export class PersonalBiodataComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
