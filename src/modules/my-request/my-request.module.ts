/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgHttpLoaderModule } from 'ng-http-loader'
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

/* Components */
import * as myRequestComponents from './components';

/* Containers */
import * as myRequestContainers from './containers';

/* Guards */
import * as myRequestGuards from './guards';

/* Services */
import * as myRequestServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        FileSaverModule,
        HttpClientModule,
        HttpClientJsonpModule,
        GoogleMapsModule,
        NgHttpLoaderModule.forRoot()
    ],
    providers: [...myRequestServices.services, ...myRequestGuards.guards],
    declarations: [...myRequestContainers.containers, ...myRequestComponents.components],
    exports: [...myRequestContainers.containers, ...myRequestComponents.components],
})
export class MyRequestModule {}
