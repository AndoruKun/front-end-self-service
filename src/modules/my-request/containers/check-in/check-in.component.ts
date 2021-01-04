import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';
import { FileSaverService } from 'ngx-filesaver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-check-in',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './check-in.component.html',
    styleUrls: ['check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
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
                    if (data.type == "CHECKIN")
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
}
