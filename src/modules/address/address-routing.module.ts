/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AddressModule } from './address.module';

/* Containers */
import * as addressContainers from './containers';

/* Guards */
import * as addressGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        data: {
            title: 'Address - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Address',
                    active: true,
                },
            ],
        } as SBRouteData,
        component: addressContainers.AddressComponent,
    },
];

@NgModule({
    imports: [AddressModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AddressRoutingModule {}
