import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MethodServices } from '../../../../../service/method-service';
import { UserService } from '@modules/auth/services';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { User } from '@modules/auth/models';

@Component({
    selector: 'sb-personal-biodata',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './personal-biodata.component.html',
    styleUrls: ['personal-biodata.component.scss'],
})
export class PersonalBiodataComponent implements OnInit {
    @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined;files:any;
    active = "currentValue"
    user:any
    personalData:any
    maritalStatus= [
        '-- Select --',
        'Married',
        'Unmarried',
        'Widow (Female)',
        'Widow (Male)'
    ]
    education = [
        '-- Select --',
        'SD',
        'SMP',
        'SMA',
        'D1',
        'D2',
        'D3',
        'S1',
        'S2',
        'S3',
    ]
    modelMaritalStatus:any;
    birthDate:any;
    modelNoNPWP:any;
    modelNoKK:any;
    modelPersonalEmail:any
    modelLastEducation:any
    modelMobilePhone:any
    modelRemark:any
    disabledBtn:boolean = true

    constructor(private methodServices:MethodServices,
                public userService: UserService,
                private calendar: NgbCalendar,
                public formatter: NgbDateParserFormatter,) {

        this.userService.user$.subscribe(user => {
            this.user = user
            let userBirthDate = user.birthDate.split("-")
            this.birthDate = new NgbDate(parseInt(userBirthDate[0]), parseInt(userBirthDate[1]), parseInt(userBirthDate[2]))
        })

    }
    ngOnInit() {
        this.modelMaritalStatus = "-- Select --"
        this.modelLastEducation = "-- Select --"

    }

    onDateSelection(date: NgbDate, typeChange:any) {
        if (typeof typeChange != "undefined" )
            this.birthDate = date;
    }

    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
    }

    changeEvent(event:any, type:any) {
        switch (type) {
            case "maritalStatus":
                if (event.target.value != '-- Select --')
                    this.modelMaritalStatus = event.target.value
                else
                    this.modelMaritalStatus = ""
                break
            case "lastEducation":
                if (event.target.value != '-- Select --')
                    this.modelLastEducation = event.target.value
                else
                    this.modelLastEducation = ""
                break
            case "npwp":
                this.modelNoNPWP = event.target.value
                break
            case 'kk':
                this.modelNoKK = event.target.value
            case "email":
                this.modelPersonalEmail = event.target.value
                break
            case "phone":
                this.modelMobilePhone = event.target.value
                break
            case "remark":
                this.modelRemark = event.target.value
                break
            case "uploadFile":
                this.files = event.target.files.item(0)
                break
        }
        if (this.modelRemark != "" && typeof this.modelRemark != "undefined" &&
            typeof this.files != "undefined" && typeof this.modelMaritalStatus != "undefined" && this.modelMaritalStatus != "" &&
            typeof this.modelNoNPWP != 'undefined' && this.modelNoNPWP != "" &&
            typeof this.modelMobilePhone != "undefined" && this.modelMobilePhone != "" &&
            typeof this.modelLastEducation != 'undefined' && this.modelLastEducation != "" &&
            typeof this.modelNoKK != "undefined" && this.modelNoKK != "")
            this.disabledBtn = false
        else
            this.disabledBtn = true
    }

    submitProc() {
        let formData = new FormData()
        let birthDate = typeof this.birthDate != "undefined" ? this.birthDate.year+"-"+(this.birthDate.month < 10 ? "0"+this.birthDate.month : this.birthDate.month)+"-"+(this.birthDate.day < 10 ? "0"+this.birthDate.day : this.birthDate.day) : null



        let dataBody = {
            "firstName": this.user.firstName,
            "lastName": this.user.lastName,
            "email":this.user.email,
            "familyCardNo":this.modelNoKK,
            "ktpNo": this.user.ktpNo,
            "lastEducation":this.modelLastEducation,
            "bloodType":this.user.bloodType,
            "birthDate":birthDate,
            "maritialStatus": this.modelMaritalStatus,
            "nationality": this.user.nationality,
            "npwpNo":this.modelNoNPWP,
            "bpjsNo":this.user.bpjsNo,
            "religion":this.user.religion,
            "mobilePhone":this.modelMobilePhone
        }

        formData.append("employee", JSON.stringify(dataBody))
        formData.append("file", !(typeof this.files == null) ? this.files : null)

        // console.log(dataBody)

        this.methodServices.postData(formData
            , localStorage.getItem("Token"),
            '/api/v1/employee/request',
            (result:any) => {
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else
                    this.methodServices.sweetAlert('success', result.message)
            })
    }
}
