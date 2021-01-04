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
import * as checkInComponents from './components';

/* Containers */
import * as checkInContainers from './containers';

/* Guards */
import * as checkInGuards from './guards';

/* Services */
import * as checkInServices from './services';
import { NgHttpLoaderModule } from 'ng-http-loader';

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
        NgHttpLoaderModule.forRoot()
    ],
    providers: [...checkInServices.services, ...checkInGuards.guards],
    declarations: [...checkInContainers.containers, ...checkInComponents.components],
    exports: [...checkInContainers.containers, ...checkInComponents.components],
})
export class CheckInModule {}
