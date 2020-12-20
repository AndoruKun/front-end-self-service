/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CheckOutModule } from './check-out.module';

/* Containers */
import * as checkOutContainers from './containers';

/* Guards */
import * as checkOutGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'check-out',
    },
    {
        path: 'check-out',
        canActivate: [],
        component: checkOutContainers.CheckOutComponent,
        data: {
            title: 'Check Out - SB Admin Angular',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CheckOutModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CheckOutRoutingModule {}
