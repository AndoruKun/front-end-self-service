/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SelfServiceModule } from './self-service.module';

/* Containers */
import * as selfServiceContainers from './containers';

/* Guards */
import * as selfServiceGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: selfServiceContainers.SelfServiceComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'absence'
            },
            {
                path: 'absence',
                data: {
                    title: 'Self Service - Absence',
                    breadcrumbs: [
                        {
                            text: 'Self Service',
                            link: '/self-service',
                        },
                        {
                            text: 'Absence',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                component: selfServiceContainers.AbsenceComponent
            },
            {
                path: 'benefit',
                data: {
                    title: 'self Serivce - Benefit',
                    breadcrumbs: [
                        {
                            text: 'Self Service',
                            link: '/self-service',
                        },
                        {
                            text: 'Benefit',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                component: selfServiceContainers.BenefitComponent
            }
        ]
    },
];

@NgModule({
    imports: [SelfServiceModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SelfServiceRoutingModule {}
