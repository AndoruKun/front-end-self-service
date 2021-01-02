import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-biodata',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './biodata.component.html',
    styleUrls: ['biodata.component.scss'],
})
export class BiodataComponent implements OnInit {
    listRequestBiodata:any
    idxSelected:any
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
            '/api/v1/employee/request',
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
    cancelRequest(requestCancel:any) {
        let params = 'requestNo='+requestCancel
        this.methodServices.getUrlApi(
            '/api/v1/employee/request/cancel',
            localStorage.getItem('Token'),
            (res:any) => {
                if (res.error)
                    this.methodServices.sweetAlert('error', res.error.message)
                else
                    this.methodServices.sweetAlert('success', res.message, "Success", (result:any) => {
                        if (result.value) {
                            location.reload()
                        }
                    })
            },
            params
        )
    }
}
