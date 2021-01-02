import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';

@Component({
    selector: 'sb-benefit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './benefit.component.html',
    styleUrls: ['benefit.component.scss'],
})
export class BenefitComponent implements OnInit {
    listRequestBenefit:any
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
            '/api/v1/benefit/request',
            localStorage.getItem('Token'),
            (response:any) => {
                this.listRequestBenefit = response
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
            '/api/v1/benefit/request/cancel',
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
