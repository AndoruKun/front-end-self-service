/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CheckInModule } from './check-in.module';

/* Containers */
import * as checkInContainers from './containers';

/* Guards */
import * as checkInGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'check-in',
    },
    {
        path: 'check-in',
        canActivate: [],
        component: checkInContainers.CheckInComponent,
        data: {
            title: 'Check In - SB Admin Angular',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CheckInModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CheckInRoutingModule {}
