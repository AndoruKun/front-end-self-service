/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

/* Components */
import * as checkOutComponents from './components';

/* Containers */
import * as checkOutContainers from './containers';

/* Guards */
import * as checkOutGuards from './guards';

/* Services */
import * as checkOutServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        GoogleMapsModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        HttpClientModule,
        HttpClientJsonpModule,
    ],
    providers: [...checkOutServices.services, ...checkOutGuards.guards],
    declarations: [...checkOutContainers.containers, ...checkOutComponents.components],
    exports: [...checkOutContainers.containers, ...checkOutComponents.components],
})
export class CheckOutModule {}
