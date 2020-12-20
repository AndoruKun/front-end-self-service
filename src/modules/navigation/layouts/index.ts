import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { LayoutErrorComponent } from './layout-error/layout-error.component';
import { LayoutSelfServiceComponent } from './layout-self-service/layout-self-service.component';
import { LayoutMyTeamComponent } from './layout-my-team/layout-my-team.component';
import { LayoutCheckInComponent } from './layout-check-in/layout-check-in.component';
import { LayoutCheckOutComponent } from './layout-check-out/layout-check-out.component';

export const layouts = [LayoutDashboardComponent, LayoutAuthComponent, LayoutErrorComponent, LayoutSelfServiceComponent, LayoutMyTeamComponent, LayoutCheckInComponent, LayoutCheckOutComponent];

export * from './layout-dashboard/layout-dashboard.component';
export * from './layout-auth/layout-auth.component';
export * from './layout-error/layout-error.component';
export * from './layout-self-service/layout-self-service.component';
export * from './layout-my-team/layout-my-team.component';
export * from './layout-check-in/layout-check-in.component';
export * from './layout-check-out/layout-check-out.component';
