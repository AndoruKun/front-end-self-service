/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as familyComponents from './components';

/* Containers */
import * as familyContainers from './containers';

/* Guards */
import * as familyGuards from './guards';

/* Services */
import * as familyServices from './services';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        NgHttpLoaderModule.forRoot(),
    ],
    providers: [...familyServices.services, ...familyGuards.guards],
    declarations: [...familyContainers.containers, ...familyComponents.components],
    exports: [...familyContainers.containers, ...familyComponents.components],
})
export class FamilyModule {}
