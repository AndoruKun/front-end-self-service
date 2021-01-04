/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { EmploymentModule } from './employment.module';

/* Containers */
import * as employmentContainers from './containers';

/* Guards */
import * as employmentGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        data: {
            title: 'Employment',
            breadcrumbs: [
                {
                    text: 'Employment',
                    link: '/employment',
                },
            ],
        } as SBRouteData,
        component: employmentContainers.EmploymentComponent,
    },
];

@NgModule({
    imports: [EmploymentModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EmploymentRoutingModule {}
