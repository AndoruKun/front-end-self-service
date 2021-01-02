import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MethodServices } from '../../../../service/method-service';
import { catchError, map } from 'rxjs/operators';

@Component({
    selector: 'sb-check-out',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './check-out.component.html',
    styleUrls: ['check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
    dataLocation:any
    markerPositions:any
    modelOutOffice:any
    disabledBtn:boolean = true
    markerOptions: google.maps.MarkerOptions = {draggable: false};
    center: google.maps.LatLngLiteral | undefined
    modelRemark:any
    modelPurpose:any
    purposes = [
        ""
        , "Daily Routine"
        , "Meeting di luar kantor"
        , "Perjalanan Dinas Dalam Kota"
        , "Perjalanan Dinas Dalam Luar Kota"
        , "Seminar / Workshop Dalam Kota"
        , "Seminar / Workshop Dalam Luar Kota"
        , "Training Dalam Kota"
        , "Training Luar Kota"
        , "Work From Home"]

    constructor(httpClient: HttpClient,
                private methodServices:MethodServices) {}
    ngOnInit() {
        this.methodServices.getPosition().then(pos => {
            let latLngJson = {
                lat: pos.lat,
                lng: pos.lng
            }
            this.center = latLngJson;
            this.dataLocation = this.center;
        })

        this.modelOutOffice = false
    }

    changeEvent(event:any, eventType:any, required?:any){
        switch (eventType) {
            case "outOffice":
                this.modelOutOffice = event.target.checked
                break
            case "purpose":
                this.modelPurpose = event.target.value
                break
            case "remark":
                this.disabledBtn = false
                this.modelRemark = event.target.value
                break
        }
    }

    submitProc() {
        if (typeof this.modelPurpose == "undefined")
            this.modelPurpose = null
        let dataObj = {
            "type": "CHECKOUT",
            "actual_lat": this.dataLocation.lat.toString(),
            "actual_lng": this.dataLocation.lng.toString(),
            "outOffice": this.modelOutOffice.toString(),
            "purpose": this.modelPurpose,
            "remark": this.modelRemark
        }

        this.methodServices.postData(dataObj,
            localStorage.getItem('Token'),
            '/api/v1/attempdaily',
            (result:any)=>{
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else
                    this.methodServices.sweetAlert('success', result.requestNo, result.message, (result: any) => {
                        if (result.value) {
                            location.reload()
                        }
                    })
            })
    }
}
