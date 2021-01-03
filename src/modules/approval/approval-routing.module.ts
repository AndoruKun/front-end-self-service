/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ApprovalModule } from './approval.module';

/* Containers */
import * as approvalContainers from './containers';

/* Guards */
import * as approvalGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';
import { ApprovalComponent } from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: approvalContainers.ApprovalComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'absence'
            },
            {
                path: 'absence',
                data: {
                    title: 'Approval - Absence',
                    breadcrumbs: [
                        {
                            text: 'Approval',
                            link: '/approval',
                        },
                        {
                            text: 'Absence',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [approvalGuards.ApprovalGuard],
                component: approvalContainers.AbsenceComponent
            },
            {
                path: 'benefit',
                data: {
                    title: 'Approval - Benefit',
                    breadcrumbs: [
                        {
                            text: 'Approval',
                            link: '/approval',
                        },
                        {
                            text: 'Benefit',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [approvalGuards.ApprovalGuard],
                component: approvalContainers.BenefitComponent
            },
            {
                path: 'checkin-out',
                data: {
                    title: 'Approval - Check In/Out',
                    breadcrumbs: [
                        {
                            text: 'Approval',
                            link: '/approval',
                        },
                        {
                            text: 'Check In/Out',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                canActivate: [approvalGuards.ApprovalGuard],
                component: approvalContainers.CheckinOutComponent
            },
            {
                path: 'personal',
                canActivate: [approvalGuards.ApprovalGuard],
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'personal'
                    },
                    {
                        path: 'biodata',
                        data: {
                            title: 'Approval Personal - Biodata',
                            breadcrumbs: [
                                {
                                    text: 'Approval',
                                    link: '/approval',
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
                        component: approvalContainers.BiodataComponent
                    },
                    {
                        path: 'address',
                        data: {
                            title: 'Approval Personal - Address',
                            breadcrumbs: [
                                {
                                    text: 'Approval',
                                    link: '/approval',
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
                        component: approvalContainers.AddressComponent
                    },
                    {
                        path: 'family',
                        data: {
                            title: 'Approval Personal - Family',
                            breadcrumbs: [
                                {
                                    text: 'Approval',
                                    link: '/approval',
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
                        component: approvalContainers.FamilyComponent
                    }
                ]
            },
            {
                path: 'history',
                canActivate: [],
                children: [
                    {
                        path: 'absence',
                        data: {
                            title: 'Approval History - Absence',
                            breadcrumbs: [
                                {
                                    text: 'Approval History',
                                    link: '/approval/history/absence',
                                },
                                {
                                    text: 'Absence',
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                        canActivate: [approvalGuards.ApprovalGuard],
                        component: approvalContainers.AbsenceHistoryComponent
                    },
                    {
                        path: 'benefit',
                        data: {
                            title: 'Approval History - Benefit',
                            breadcrumbs: [
                                {
                                    text: 'Approval History',
                                    link: '/approval/history/absence',
                                },
                                {
                                    text: 'Benefit',
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                        canActivate: [approvalGuards.ApprovalGuard],
                        component: approvalContainers.BenefitHistoryComponent
                    },
                    {
                        path: 'checkin-out',
                        data: {
                            title: 'Approval History - Check In/Out',
                            breadcrumbs: [
                                {
                                    text: 'Approval History',
                                    link: '/approval/history/absence',
                                },
                                {
                                    text: 'Check In/Out',
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                        canActivate: [approvalGuards.ApprovalGuard],
                        component: approvalContainers.CheckinOutHistoryComponent
                    },
                    {
                        path: 'personal',
                        canActivate: [approvalGuards.ApprovalGuard],
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                redirectTo: 'personal'
                            },
                            {
                                path: 'biodata',
                                data: {
                                    title: 'Approval History Personal - Biodata',
                                    breadcrumbs: [
                                        {
                                            text: 'Approval History',
                                            link: '/approval/history/absence',
                                        },
                                        {
                                            text: 'Personal',
                                            link: '/approval/history/personal'
                                        },
                                        {
                                            text: 'Biodata',
                                            active: true
                                        }
                                    ],
                                } as SBRouteData,
                                component: approvalContainers.BiodataHistoryComponent
                            },
                            {
                                path: 'address',
                                data: {
                                    title: 'Approval History Personal - Address',
                                    breadcrumbs: [
                                        {
                                            text: 'Approval History',
                                            link: '/approval/history/absence',
                                        },
                                        {
                                            text: 'Personal',
                                            link: '/approval/history/personal'
                                        },
                                        {
                                            text: 'Address',
                                            active: true
                                        }
                                    ],
                                } as SBRouteData,
                                component: approvalContainers.AddressHistoryComponent
                            },
                            {
                                path: 'family',
                                data: {
                                    title: 'Approval History Personal - Family',
                                    breadcrumbs: [
                                        {
                                            text: 'Approval History',
                                            link: '/approval/history/absence',
                                        },
                                        {
                                            text: 'Personal',
                                            link: '/approval/history/personal'
                                        },
                                        {
                                            text: 'Family',
                                            active: true
                                        }
                                    ],
                                } as SBRouteData,
                                component: approvalContainers.FamilyHistoryComponent
                            }
                        ]
                    }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [ApprovalModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ApprovalRoutingModule {}
