import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../../service/method-service';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-personal-family',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './personal-family.component.html',
    styleUrls: ['personal-family.component.scss'],
})
export class PersonalFamilyComponent implements OnInit {
    listDataFamily = []

    constructor(
        private methodServices:MethodServices,
        private router:Router
    ) {}
    ngOnInit() {
        this.loadDataAddress()
    }

    loadDataAddress() {
        this.methodServices.getUrlApi(
            '/api/v1/family',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listDataFamily = response
            }
        )
    }

    edit(familyId:any) {
        this.router.navigate(['/self-service/personal','family-form'], {
            queryParams: {
                familyid: familyId
            }
        })
    }
}
