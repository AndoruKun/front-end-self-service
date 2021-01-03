/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgHttpLoaderModule } from 'ng-http-loader'
import { NgSelect2Module } from 'ng-select2';


/* Components */
import * as reportsComponents from './components';

/* Containers */
import * as reportsContainers from './containers';

/* Guards */
import * as reportsGuards from './guards';

/* Services */
import * as reportsServices from './services';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        FileSaverModule,
        NavigationModule,
        NgSelect2Module,
        NgHttpLoaderModule.forRoot()
    ],
    providers: [...reportsServices.services, ...reportsGuards.guards],
    declarations: [...reportsContainers.containers, ...reportsComponents.components],
    exports: [...reportsContainers.containers, ...reportsComponents.components],
})
export class ReportsModule {}
