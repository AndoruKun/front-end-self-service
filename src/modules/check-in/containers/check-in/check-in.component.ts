import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MethodServices } from '../../../../service/method-service';


@Component({
    selector: 'sb-check-in',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './check-in.component.html',
    styleUrls: ['check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
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

    changeEvent(event:any, required?:any){
        if(typeof required == "undefined")
            this.modelOutOffice = event.target.checked
        else if (event.target.value != "") {
            this.disabledBtn = false
            this.modelRemark = event.target.value
        }
    }

    submitProc() {
        let dataObj = {
            "type": "CHECKIN",
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
                    this.methodServices.sweetAlert('success', result.message)
            })
    }
}
