/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SettingsModule } from './settings.module';

/* Containers */
import * as settingsContainers from './containers';

/* Guards */
import * as settingsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: settingsContainers.SettingsComponent,
    },
];

@NgModule({
    imports: [SettingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
