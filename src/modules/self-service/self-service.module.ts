/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as selfServiceComponents from './components';

/* Containers */
import * as selfServiceContainers from './containers';

/* Guards */
import * as selfServiceGuards from './guards';

/* Services */
import * as selfServiceServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...selfServiceServices.services, ...selfServiceGuards.guards],
    declarations: [...selfServiceContainers.containers, ...selfServiceComponents.components],
    exports: [...selfServiceContainers.containers, ...selfServiceComponents.components],
})
export class SelfServiceModule {}
