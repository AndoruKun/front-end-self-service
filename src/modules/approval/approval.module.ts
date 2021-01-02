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
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

/* Components */
import * as approvalComponents from './components';

/* Containers */
import * as approvalContainers from './containers';

/* Guards */
import * as approvalGuards from './guards';

/* Services */
import * as approvalServices from './services';

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
    providers: [...approvalServices.services, ...approvalGuards.guards],
    declarations: [...approvalContainers.containers, ...approvalComponents.components],
    exports: [...approvalContainers.containers, ...approvalComponents.components],
})
export class ApprovalModule {}
