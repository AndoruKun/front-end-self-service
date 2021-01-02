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
                    title: 'Self Serivce - Benefit',
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
            },
            {
                path: 'personal',
                canActivate: [],
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'personal'
                    },
                    {
                        path: 'biodata',
                        data: {
                            title: 'Self Service Personal - Biodata',
                            breadcrumbs: [
                                {
                                    text: 'Self Service',
                                    link: '/self-service',
                                },
                                {
                                    text: 'Personal',
                                    link: '/personal'
                                },
                                {
                                    text: 'Biodata',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: selfServiceContainers.PersonalBiodataComponent
                    },
                    {
                        path: 'address',
                        data: {
                            title: 'Self Service Personal - Address',
                            breadcrumbs: [
                                {
                                    text: 'Self Service',
                                    link: '/self-service',
                                },
                                {
                                    text: 'Personal',
                                    link: '/personal'
                                },
                                {
                                    text: 'Address',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: selfServiceContainers.PersonalAddressComponent
                    },
                    {
                        path: 'address-form',
                        data: {
                            title: 'Self Service Personal - Address Form',
                            breadcrumbs: [
                                {
                                    text: 'Self Service',
                                    link: '/self-service',
                                },
                                {
                                    text: 'Personal',
                                    link: '/personal'
                                },
                                {
                                    text: 'Address Form',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: selfServiceContainers.AddressFormComponent
                    },
                    {
                        path: 'family-form',
                        data: {
                            title: 'Self Service Personal - Address Form',
                            breadcrumbs: [
                                {
                                    text: 'Self Service',
                                    link: '/self-service',
                                },
                                {
                                    text: 'Personal',
                                    link: '/personal'
                                },
                                {
                                    text: 'Family Form',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: selfServiceContainers.FamilyFormComponent
                    },
                    {
                        path: 'family',
                        data: {
                            title: 'Self Service Personal - Family',
                            breadcrumbs: [
                                {
                                    text: 'Self Service',
                                    link: '/self-service',
                                },
                                {
                                    text: 'Personal',
                                    link: '/personal'
                                },
                                {
                                    text: 'Family',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: selfServiceContainers.PersonalFamilyComponent
                    }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [SelfServiceModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SelfServiceRoutingModule {}
