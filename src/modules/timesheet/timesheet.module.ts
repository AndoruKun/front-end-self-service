/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgHttpLoaderModule } from 'ng-http-loader'


/* Components */
import * as timesheetComponents from './components';

/* Containers */
import * as timesheetContainers from './containers';

/* Guards */
import * as timesheetGuards from './guards';

/* Services */
import * as timesheetServices from './services';

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
    providers: [...timesheetServices.services, ...timesheetGuards.guards],
    declarations: [...timesheetContainers.containers, ...timesheetComponents.components],
    exports: [...timesheetContainers.containers, ...timesheetComponents.components],
})
export class TimesheetModule {}
