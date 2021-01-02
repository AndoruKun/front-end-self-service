/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { TimesheetModule } from './timesheet.module';

/* Containers */
import * as timesheetContainers from './containers';

/* Guards */
import * as timesheetGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: timesheetContainers.TimesheetComponent,
    },
];

@NgModule({
    imports: [TimesheetModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TimesheetRoutingModule {}
