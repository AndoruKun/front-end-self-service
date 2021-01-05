import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-absence',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './absence.component.html',
    styleUrls: ['absence.component.scss'],
})
export class AbsenceComponent implements OnInit {
    listRequestAbsence:any
    dataAbsence:any
    modelRemark:any
    idxSelected:any
    constructor(
        private methodServices:MethodServices,
        private _FileSaverService:FileSaverService,
        private modalService: NgbModal,
    ) {}
    ngOnInit() {
        this.loadDataRequest()
    }

    loadDataRequest() {
        this.methodServices.getUrlApi(
            '/api/v1/absence/request/needapprove',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listRequestAbsence = response
                console.log(this.listRequestAbsence)
            }
        )
    }

    openModal(content:any, idxData:any) {
        this.idxSelected = idxData
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, scrollable: true })
    }

    downloadFile(linkFile:any) {
        this.methodServices.getUrlApiFile(
            linkFile,
            localStorage.getItem('Token'),
            (res:any) => {
                this._FileSaverService.save(res);
            }
        )
    }
    approvalRequest(requestApproval:any) {

        let dataBody = {
            'remark': this.modelRemark,
            'requestNo': requestApproval,
            'status': "APPROVED"
        }

        this.methodServices.postData(
            dataBody,
            localStorage.getItem('Token'),
            '/api/v1/absence/request/approve',
            (res:any) => {
                if (res.error)
                    this.methodServices.sweetAlert('error', res.error.message)
                else
                    this.methodServices.sweetAlert('success', res.message, "Success", (result:any) => {
                        if (result.value) {
                            location.reload()
                        }
                    })
            }
        )
    }
    rejectedRequest(requestApproval:any) {

        let dataBody = {
            'remark': this.modelRemark,
            'requestNo': requestApproval,
            'status': "REJECTED"
        }

        this.methodServices.postData(
            dataBody,
            localStorage.getItem('Token'),
            '/api/v1/absence/request/approve',
            (res:any) => {
                if (res.error)
                    this.methodServices.sweetAlert('error', res.error.message)
                else
                    this.methodServices.sweetAlert('success', res.message, "Success", (result:any) => {
                        if (result.value) {
                            location.reload()
                        }
                    })
            }
        )
    }
}
