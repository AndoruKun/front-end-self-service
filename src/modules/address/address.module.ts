/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as addressComponents from './components';

/* Containers */
import * as addressContainers from './containers';

/* Guards */
import * as addressGuards from './guards';

/* Services */
import * as addressServices from './services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    providers: [...addressServices.services, ...addressGuards.guards],
    declarations: [...addressContainers.containers, ...addressComponents.components],
    exports: [...addressContainers.containers, ...addressComponents.components],
})
export class AddressModule {}
