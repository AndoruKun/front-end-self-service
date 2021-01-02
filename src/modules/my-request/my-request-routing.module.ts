/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { MyRequestModule } from './my-request.module';

/* Containers */
import * as myRequestContainers from './containers';

/* Guards */
import * as myRequestGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: myRequestContainers.MyRequestComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'absence'
            },
            {
                path: 'absence',
                data: {
                    title: 'My Request - Absence',
                    breadcrumbs: [
                        {
                            text: 'My Request',
                            link: '/my-request',
                        },
                        {
                            text: 'Absence',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [myRequestGuards.MyRequestGuard],
                component: myRequestContainers.AbsenceComponent
            },
            {
                path: 'benefit',
                data: {
                    title: 'My Request - Benefit',
                    breadcrumbs: [
                        {
                            text: 'My Request',
                            link: '/my-request',
                        },
                        {
                            text: 'Benefit',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                component: myRequestContainers.BenefitComponent
            },
            {
                path: 'check-in',
                data: {
                    title: 'My Request - Check In',
                    breadcrumbs: [
                        {
                            text: 'My Request',
                            link: '/my-request',
                        },
                        {
                            text: 'Check In',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                component: myRequestContainers.CheckInComponent
            },
            {
                path: 'check-out',
                data: {
                    title: 'My Request - Check Out',
                    breadcrumbs: [
                        {
                            text: 'My Request',
                            link: '/my-request',
                        },
                        {
                            text: 'Check Out',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                component: myRequestContainers.CheckOutComponent
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
                            title: 'My Request Personal - Biodata',
                            breadcrumbs: [
                                {
                                    text: 'My Request',
                                    link: '/my-request',
                                },
                                {
                                    text: 'Personal',
                                    link: '/my-request/personal'
                                },
                                {
                                    text: 'Biodata',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: myRequestContainers.BiodataComponent
                    },
                    {
                        path: 'address',
                        data: {
                            title: 'My Request Personal - Address',
                            breadcrumbs: [
                                {
                                    text: 'My Request',
                                    link: '/my-request',
                                },
                                {
                                    text: 'Personal',
                                    link: '/my-request/personal'
                                },
                                {
                                    text: 'Address',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: myRequestContainers.AddressComponent
                    },
                    {
                        path: 'family',
                        data: {
                            title: 'My Request Personal - Family',
                            breadcrumbs: [
                                {
                                    text: 'My Request',
                                    link: '/my-request',
                                },
                                {
                                    text: 'Personal',
                                    link: '/my-request/personal'
                                },
                                {
                                    text: 'Family',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: myRequestContainers.FamilyComponent
                    }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [MyRequestModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MyRequestRoutingModule {}
