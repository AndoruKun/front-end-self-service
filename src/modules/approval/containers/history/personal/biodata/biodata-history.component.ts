import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-biodata',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './biodata-history.component.html',
    styleUrls: ['biodata-history.component.scss'],
})
export class BiodataHistoryComponent implements OnInit {
    listRequestBiodata:any
    idxSelected:any
    modelRemark:any
    constructor(
        private methodServices:MethodServices,
        private _FileSaverService:FileSaverService,
        private router:Router,
        private modalService: NgbModal
    ) {}
    ngOnInit() {
        this.loadDataRequest()
    }

    loadDataRequest() {
        this.methodServices.getUrlApi(
            '/api/v1/employee/request/history',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listRequestBiodata = response
                console.log(this.listRequestBiodata)
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
            '/api/v1/employee/request/approve',
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
