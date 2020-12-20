import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-my-team',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './my-team.component.html',
    styleUrls: ['my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
