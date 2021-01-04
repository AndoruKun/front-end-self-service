import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-address',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './address.component.html',
    styleUrls: ['address.component.scss'],
})
export class AddressComponent implements OnInit {
    listRequestAddress:any
    idxSelected:any
    modelRemark:any
    constructor(
        private methodServices:MethodServices,
        private router:Router,
        private modalService:NgbModal,
    ) {}
    ngOnInit() {
        this.loadDataRequest()
    }

    loadDataRequest() {
        this.methodServices.getUrlApi(
            '/api/v1/address',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listRequestAddress = response
            }
        )
    }

    openModal(content:any, idxData:any) {
        this.idxSelected = idxData
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, scrollable: true })
    }
}
