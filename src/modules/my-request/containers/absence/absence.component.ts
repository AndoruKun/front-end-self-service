import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';


@Component({
    selector: 'sb-absence',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './absence.component.html',
    styleUrls: ['absence.component.scss'],
})
export class AbsenceComponent implements OnInit {
    listRequestAbsence:any
    dataAbsence:any
    constructor(
        private methodServices:MethodServices,
        private _FileSaverService:FileSaverService
    ) {}
    ngOnInit() {
        this.loadDataRequest()
    }

    loadDataRequest() {
        this.methodServices.getUrlApi(
            '/api/v1/absence/request',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listRequestAbsence = response
            }
        )
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
            '/api/v1/absence/request/cancel',
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
