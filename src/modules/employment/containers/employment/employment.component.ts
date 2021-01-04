import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-employment',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './employment.component.html',
    styleUrls: ['employment.component.scss'],
})
export class EmploymentComponent implements OnInit {
    dataEmployment:any
    constructor(
        private methodServices:MethodServices
    ) {}
    ngOnInit() {
        this.loadDataEmployment()
    }

    loadDataEmployment() {
        this.methodServices.getUrlApi(
            '/api/v1/employment',
            localStorage.getItem('Token'),
            (response:any) => {
                this.dataEmployment = response
                console.log(this.dataEmployment)
            }
        )
    }
}
