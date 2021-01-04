import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-check-out',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './check-out.component.html',
    styleUrls: ['check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
    listRequestAttemp = []
    dataAbsence:any
    markerPositions:any
    dataLocation:any
    markerOptions: google.maps.MarkerOptions = {draggable: false};
    center: google.maps.LatLngLiteral | undefined
    idxSelected:any
    constructor(
        private methodServices:MethodServices,
        private _FileSaverService:FileSaverService,
        private modalService:NgbModal
    ) {}
    ngOnInit() {
        this.loadDataRequest()
    }

    loadDataRequest() {
        this.methodServices.getUrlApi(
            '/api/v1/attempdaily/request',
            localStorage.getItem('Token'),
            (response:any) => {
                for (let data of response) {
                    if (data.type == "CHECKOUT")
                    {
                        // @ts-ignore
                        this.listRequestAttemp.push(data)
                    }
                }
            }
        )
    }

    openModal(content:any, idxData:any) {
        this.idxSelected = idxData
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, scrollable: true })
    }

    cancelRequest(requestCancel:any) {
        let params = 'requestNo='+requestCancel

        this.methodServices.getUrlApi(
            '/api/v1/attempdaily/request/cancel',
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
