/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { FamilyModule } from './family.module';

/* Containers */
import * as familyContainers from './containers';

/* Guards */
import * as familyGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        data: {
            title: 'Family',
            breadcrumbs: [
                {
                    text: 'Family',
                    link: '/family',
                },
            ],
        } as SBRouteData,
        component: familyContainers.FamilyComponent,
    },
];

@NgModule({
    imports: [FamilyModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class FamilyRoutingModule {}
