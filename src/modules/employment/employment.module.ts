/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as employmentComponents from './components';

/* Containers */
import * as employmentContainers from './containers';

/* Guards */
import * as employmentGuards from './guards';

/* Services */
import * as employmentServices from './services';
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
    providers: [...employmentServices.services, ...employmentGuards.guards],
    declarations: [...employmentContainers.containers, ...employmentComponents.components],
    exports: [...employmentContainers.containers, ...employmentComponents.components],
})
export class EmploymentModule {}
