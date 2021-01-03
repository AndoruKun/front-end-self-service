import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'my-team',
        loadChildren: () =>
            import('modules/my-team/my-team-routing.module').then(m => m.MyTeamRoutingModule),
    },
    {
        path: 'check-in',
        loadChildren: () =>
            import('modules/check-in/check-in-routing.module').then(m => m.CheckInRoutingModule),
    },
    {
        path: 'check-out',
        loadChildren: () =>
            import('modules/check-out/check-out-routing.module').then(m => m.CheckOutRoutingModule),
    },
    {
        path: 'self-service',
        loadChildren: () =>
            import('modules/self-service/self-service-routing.module').then(m => m.SelfServiceRoutingModule)
    },
    {
        path: 'my-request',
        loadChildren: () =>
            import('modules/my-request/my-request-routing.module').then(m => m.MyRequestRoutingModule)
    },
    {
        path: 'approval',
        loadChildren: () =>
            import('modules/approval/approval-routing.module').then(m => m.ApprovalRoutingModule)
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('modules/reports/reports-routing.module').then(m => m.ReportsRoutingModule)
    },
    {
        path: 'timesheet',
        loadChildren: () =>
            import('modules/timesheet/timesheet-routing.module').then(m => m.TimesheetRoutingModule)
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('modules/settings/settings-routing.module').then(m => m.SettingsRoutingModule)
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
