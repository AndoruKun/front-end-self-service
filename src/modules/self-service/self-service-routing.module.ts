/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SelfServiceModule } from './self-service.module';

/* Containers */
import * as selfServiceContainers from './containers';

/* Guards */
import * as selfServiceGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: selfServiceContainers.SelfServiceComponent,
    // },
];

@NgModule({
    imports: [SelfServiceModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SelfServiceRoutingModule {}
