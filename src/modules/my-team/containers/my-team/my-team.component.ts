import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-my-team',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './my-team.component.html',
    styleUrls: ['my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {
    listMyTeam:any
    constructor(
        private methodService:MethodServices
    ) {}
    ngOnInit() {
        this.loadMyTeamData()
    }

    loadMyTeamData() {
        this.methodService.getUrlApi(
            '/api/v1/employee/myteam',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listMyTeam = response
        })
    }
}
