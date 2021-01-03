/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ReportsModule } from './reports.module';

/* Containers */
import * as reportsContainers from './containers';

/* Guards */
import * as reportsGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: reportsContainers.ReportsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'absence'
            },
            {
                path: 'absence',
                data: {
                    title: 'Reports - Absence',
                    breadcrumbs: [
                        {
                            text: 'Report',
                            link: '/reports',
                        },
                        {
                            text: 'Absence',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [reportsGuards.ReportsGuard],
                component: reportsContainers.AbsenceComponent
            },
            {
                path: 'benefit',
                data: {
                    title: 'Reports - Benefit',
                    breadcrumbs: [
                        {
                            text: 'Reports',
                            link: '/reports',
                        },
                        {
                            text: 'Benefit',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [reportsGuards.ReportsGuard],
                component: reportsContainers.BenefitComponent
            },
            {
                path: 'checkin-out',
                data: {
                    title: 'Reports - Check In/Out',
                    breadcrumbs: [
                        {
                            text: 'Reports',
                            link: '/reports',
                        },
                        {
                            text: 'Check In/Out',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [reportsGuards.ReportsGuard],
                component: reportsContainers.CheckinOutComponent
            },
            {
                path: 'personal',
                canActivate: [reportsGuards.ReportsGuard],
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'personal'
                    },
                    {
                        path: 'biodata',
                        data: {
                            title: 'Reports Personal - Biodata',
                            breadcrumbs: [
                                {
                                    text: 'Reports',
                                    link: '/reports',
                                },
                                {
                                    text: 'Personal',
                                    link: '/approval/personal'
                                },
                                {
                                    text: 'Biodata',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: reportsContainers.BiodataComponent
                    },
                    {
                        path: 'address',
                        data: {
                            title: 'Reports Personal - Address',
                            breadcrumbs: [
                                {
                                    text: 'Reports',
                                    link: '/reports',
                                },
                                {
                                    text: 'Personal',
                                    link: '/approval/personal'
                                },
                                {
                                    text: 'Address',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: reportsContainers.AddressComponent
                    },
                    {
                        path: 'family',
                        data: {
                            title: 'Reports Personal - Family',
                            breadcrumbs: [
                                {
                                    text: 'Reports',
                                    link: '/reports',
                                },
                                {
                                    text: 'Personal',
                                    link: '/approval/personal'
                                },
                                {
                                    text: 'Family',
                                    active: true
                                }
                            ],
                        } as SBRouteData,
                        component: reportsContainers.FamilyComponent
                    }
                ]
            }
        ]
    },

];

@NgModule({
    imports: [ReportsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}
