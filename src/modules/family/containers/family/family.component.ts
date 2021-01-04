import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-family',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './family.component.html',
    styleUrls: ['family.component.scss'],
})
export class FamilyComponent implements OnInit {
    listDataFamily = []
    idxSelected:any

    constructor(
        private methodServices:MethodServices,
        private router:Router,
        private modalService: NgbModal
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

    openModal(content:any, idxData:any) {
        this.idxSelected = idxData
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, scrollable: true })
    }
}
