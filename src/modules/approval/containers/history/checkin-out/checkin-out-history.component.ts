import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-checkin-out',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './checkin-out-history.component.html',
    styleUrls: ['checkin-out-history.component.scss'],
})
export class CheckinOutHistoryComponent implements OnInit {
    listRequestAttemp = []
    idxSelected:any
    modelRemark:any
    markerPositions:any
    dataLocation:any
    markerOptions: google.maps.MarkerOptions = {draggable: false};
    center: google.maps.LatLngLiteral | undefined

    constructor(
        private methodServices:MethodServices,
        private _FileSaverService:FileSaverService,
        private modalService:NgbModal,
    ) {}
    ngOnInit() {
        this.loadDataRequest()
    }

    loadDataRequest() {
        this.methodServices.getUrlApi(
            '/api/v1/attempdaily/request/history',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listRequestAttemp = response
                console.log(this.listRequestAttemp)
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
            '/api/v1/attempdaily/request/approve',
            (res: any) => {
                if (res.error)
                    this.methodServices.sweetAlert('error', res.error.message)
                else
                    this.methodServices.sweetAlert('success', res.message, "Success", (result: any) => {
                        if (result.value) {
                            location.reload()
                        }
                    })
            }
        )
    }
}
