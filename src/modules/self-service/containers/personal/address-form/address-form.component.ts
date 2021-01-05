import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MethodServices } from '../../../../../service/method-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'sb-address-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './address-form.component.html',
    styleUrls: ['address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
    @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined;files:any;
    addressType = [
        '-- Select --',
        'Stay Address',
        'KTP Address',
        'Other'
    ]
    stayStatus = [
        '-- Select --',
        'Owned',
        'Contract / Kost',
        'Live with Parent'
    ]

    modelAddressType:any
    modelAddress:any
    modelCity:any
    modelCountry:any
    modelZipcode:any
    modelStatuStay:any
    modelProvince:any
    modelRemark:any
    disabledBtn:boolean = true
    modelPrimaryFlag = false
    id:any
    statusForm:any = "NEW"


    constructor(
        private methodServices:MethodServices,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ) {}
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(result=> {
            if (typeof result.addressid != 'undefined') {
                this.id = result.addressid
                this.loadDataAddress(result.addressid)
                this.statusForm = "EDIT"
            }

        })
    }

    changeEvent(event:any, type:any) {
        switch (type) {
            case "addressType":
                if (event.target.value != '-- Select --')
                    this.modelAddressType = event.target.value
                else
                    this.modelAddressType = ""
                break
            case "stayStatus":
                if (event.target.value != '-- Select --')
                    this.modelStatuStay = event.target.value
                else
                    this.modelStatuStay = ""
                break
            case "address":
                this.modelAddress = event.target.value
                break
            case 'city':
                this.modelCity = event.target.value
                break
            case 'country':
                this.modelCountry = event.target.value
                break
            case "primaryFlag":
                this.modelPrimaryFlag = event.target.checked
                break
            case "province":
                this.modelProvince = event.target.value
                break
            case "zipCode":
                this.modelZipcode = event.target.value
                break
            case "remark":
                this.modelRemark = event.target.value
                break
            case "uploadFile":
                this.files = event.target.files.item(0)
                break
        }
        if (typeof this.modelAddressType != "undefined" && this.modelAddressType != "" &&
            typeof this.modelCity != 'undefined' && this.modelCity != "" &&
            typeof this.modelCountry != 'undefined' && this.modelCountry != "" &&
            typeof this.modelAddress != "undefined" && this.modelAddress != "" &&
            typeof this.modelProvince != "undefined" && this.modelProvince != "" &&
            typeof this.modelStatuStay != 'undefined' && this.modelStatuStay != "" &&
            typeof this.modelZipcode != "undefined" && this.modelZipcode != "")
            this.disabledBtn = false
        else
            this.disabledBtn = true
    }

    loadDataAddress(addressId?:any) {
        this.methodServices.getUrlApi(
            '/api/v1/address',
            localStorage.getItem('Token'),
            (response:any) => {
                for (let data of response) {
                    if (typeof data != "undefined") {
                        if (data.addressId == addressId) {
                            this.modelAddressType = data.type
                            this.modelCountry = data.country
                            this.modelZipcode = data.zipCode
                            this.modelStatuStay = data.stayStatus
                            this.modelProvince = data.province
                            this.modelPrimaryFlag = data.primaryFlag
                            this.modelCity = data.city
                            this.modelAddress = data.address
                        }
                    }
                }
            }
        )
    }

    submitProc() {
        let formData = new FormData()
        let url = '/api/v1/address'

        let dataBody = {
            "addressId": typeof this.id == 'undefined' ? null : this.id,
            "address": this.modelAddress,
            "city": this.modelCity,
            "country": this.modelCountry,
            "primaryFlag": this.modelPrimaryFlag,
            "province": this.modelProvince,
            "stayStatus": this.modelStatuStay,
            "type": this.modelAddressType,
            "zipCode": this.modelZipcode
        }

        if (this.statusForm == "NEW")
            delete dataBody.addressId
        else
            url = "/api/v1/address/request/edit"

        formData.append("address", JSON.stringify(dataBody))
        formData.append("file", !(typeof this.files == null) ? this.files : null)

        this.methodServices.postData(formData
            , localStorage.getItem("Token"),
            url,
            (result:any) => {
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else {
                    this.methodServices.sweetAlert('success', result.message, "Success",(result: any) => {
                        if (result.value) {
                            this.router.navigate(["/self-service/personal/address"]);
                        }
                    })
                }
            })
    }
}
