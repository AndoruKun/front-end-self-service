/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as myTeamComponents from './components';

/* Containers */
import * as myTeamContainers from './containers';

/* Guards */
import * as myTeamGuards from './guards';

/* Services */
import * as myTeamServices from './services';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        NgHttpLoaderModule.forRoot()
    ],
    providers: [...myTeamServices.services, ...myTeamGuards.guards],
    declarations: [...myTeamContainers.containers, ...myTeamComponents.components],
    exports: [...myTeamContainers.containers, ...myTeamComponents.components],
})
export class MyTeamModule {}
