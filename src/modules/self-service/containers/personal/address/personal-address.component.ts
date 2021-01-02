import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../../service/method-service';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-personal-address',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './personal-address.component.html',
    styleUrls: ['personal-address.component.scss'],
})
export class PersonalAddressComponent implements OnInit {
    listDataAddress:any

    constructor(
        private methodServices:MethodServices,
        private router:Router
    ) {}
    ngOnInit() {
        this.loadDataAddress()
    }

    loadDataAddress() {
        this.methodServices.getUrlApi(
            '/api/v1/address',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listDataAddress = response
            }
        )
    }

    edit(addressId:any) {
        this.router.navigate(['/self-service/personal','address-form'], {
            queryParams: {
                addressid: addressId
            }
        })
    }
}
