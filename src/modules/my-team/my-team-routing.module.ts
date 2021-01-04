/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { MyTeamModule } from './my-team.module';

/* Containers */
import * as myTeamContainers from './containers';

/* Guards */
import * as myTeamGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: myTeamContainers.MyTeamComponent,
        data: {
            title: 'My Team - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'My Teams',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [MyTeamModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MyTeamRoutingModule {}
