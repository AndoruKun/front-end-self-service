import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MethodServices } from '../../../../../service/method-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'sb-family-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './family-form.component.html',
    styleUrls: ['family-form.component.scss'],
})
export class FamilyFormComponent implements OnInit {
    @ViewChild('fileUpload', {static: false}) fileUpload:ElementRef | undefined;files:any;
    maritalStatus = [
        '-- Select --',
        'Married',
        'Unmarried',
        'Single',
    ];
    familyGender = [
        '-- Select --',
        'Male',
        'Female',
    ];
    familyRelationship = [
        '-- Select --',
        'Child',
        'Parent',
        'Sibling',
        'Spouse',
        'Other',
    ];
    nationalitys = [
        '-- Select --',
        'WNI',
        'WNA',
    ];
    bloodTypes = [
        '-- Select --',
        'A+',
        'A-',
        'B+',
        'B-',
        'AB+',
        'AB-',
        'O+',
        'O-',
    ];
    aliveStatus = [
        '-- Select --',
        'Alive',
        'Passed Away',
    ];
    modelFamilyName:any;
    modelGender:any;
    modelRelationship:any;
    modelBirthPlace:any;
    modelDateBirth:any;
    modelNationality:any;
    modelBloodtype:any;
    modelAliveStatus:any;
    modelOccupation:any;
    modelMaritalStatus:any;
    modelKK:any;
    modelNik:any;
    modelAddress:any;
    modelCity:any;
    modelPhone:any;
    modelEmail:any;
    modelRemark:any;
    modelMarriedDate:any;
    modelZipcode:any;
    disabledBtn:boolean = true;
    id:any
    statusForm:any = "NEW"

    constructor(
        private methodServices:MethodServices,
        private calendar: NgbCalendar,
        public formatter: NgbDateParserFormatter,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ) {}
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(result=> {
            if (typeof result.familyid != 'undefined') {
                this.id = result.familyid
                this.statusForm = "EDIT"
                this.loadDataFamily(result.familyid)
            }
        })
    }

    loadDataFamily(familyId?:any) {
        this.methodServices.getUrlApi(
            '/api/v1/family',
            localStorage.getItem('Token'),
            (response:any) => {
                for (let data of response) {
                    if (typeof data != "undefined") {
                        if (data.familyId == familyId) {
                            this.modelFamilyName = data.fullName;
                            this.modelGender = data.gender;
                            this.modelRelationship = data.relationship;
                            this.modelBirthPlace = data.birthPlace;
                            this.modelDateBirth = this.validateInput(this.modelDateBirth, data.birthDate);
                            this.modelNationality = data.nationality;
                            this.modelBloodtype = data.bloodType;
                            this.modelAliveStatus = data.aliveStatus;
                            this.modelOccupation = data.occupation;
                            this.modelMaritalStatus = data.maritalStatus;
                            this.modelKK = data.familyCardNo;
                            this.modelNik = data.ktpNo;
                            this.modelAddress = data.address;
                            this.modelCity = data.city;
                            this.modelPhone = data.mobilePhone;
                            this.modelEmail = data.email;
                            this.modelMarriedDate = this.validateInput(this.modelMarriedDate, data.marriedDate);
                            this.modelZipcode = data.zipCode;
                        }
                    }
                }
            }
        )
    }

    onDateSelection(date: NgbDate, typeChange:any) {
        if (typeof typeChange != 'undefined' )
            this.modelDateBirth = date;
    }

    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
    }

    changeEvent(event:any, type:any) {
        switch (type) {
            case 'maritalStatus':
                if (event.target.value != '-- Select --')
                    this.modelMaritalStatus = event.target.value;
                else
                    this.modelMaritalStatus = '';
                break;
            case 'familyGender':
                if (event.target.value != '-- Select --')
                    this.modelGender = event.target.value;
                else
                    this.modelGender = '';
                break;
            case 'familyRelationship':
                if (event.target.value != '-- Select --')
                    this.modelRelationship = event.target.value;
                else
                    this.modelRelationship = '';
                break;
            case 'nationality':
                if (event.target.value != '-- Select --')
                    this.modelNationality = event.target.value;
                else
                    this.modelNationality = '';
                break;
            case 'bloodType':
                if (event.target.value != '-- Select --')
                    this.modelBloodtype = event.target.value;
                else
                    this.modelBloodtype = '';
                break;
            case 'aliveStatus':
                if (event.target.value != '-- Select --')
                    this.modelAliveStatus = event.target.value;
                else
                    this.modelAliveStatus = '';
                break;
            case 'familyName':
                this.modelFamilyName = event.target.value;
                break;
            case 'kk':
                this.modelKK = event.target.value;
                break;
            case 'nik':
                this.modelNik = event.target.value;
                break;
            case 'email':
                this.modelEmail = event.target.value;
                break;
            case 'zipCode':
                this.modelZipcode = event.target.value;
            case 'phone':
                this.modelPhone = event.target.value;
                break;
            case 'familyBirth':
                this.modelBirthPlace = event.target.value;
                break;
            case 'occupation':
                this.modelOccupation = event.target.value;
                break;
            case 'address':
                this.modelAddress = event.target.value;
                break;
            case 'city':
                this.modelCity = event.target.value;
                break;
            case 'phone':
                this.modelPhone = event.target.value;
                break;
            case 'remark':
                this.modelRemark = event.target.value;
                break;
            case 'uploadFile':
                this.files = event.target.files.item(0);
                break;
        }
        if (this.modelRemark != '' && typeof this.modelRemark != 'undefined' &&
            typeof this.files != 'undefined' && typeof this.modelMaritalStatus != 'undefined' && this.modelMaritalStatus != '' &&
            typeof this.modelFamilyName != 'undefined' && this.modelFamilyName != '' &&
            typeof this.modelGender != 'undefined' && this.modelGender != '' &&
            typeof this.modelRelationship != 'undefined' && this.modelRelationship != '' &&
            typeof this.modelBirthPlace != 'undefined' && this.modelBirthPlace != '' &&
            typeof this.modelDateBirth != 'undefined' && this.modelDateBirth != '' &&
            typeof this.modelNationality != 'undefined' && this.modelNationality != '' &&
            typeof this.modelAliveStatus != 'undefined' && this.modelAliveStatus != '' &&
            typeof this.modelAddress != 'undefined' && this.modelAddress != ''
        )
            this.disabledBtn = false;
        else
            this.disabledBtn = true;
    }

    submitProc() {
        let formData = new FormData();
        let birthDate = typeof this.modelDateBirth != 'undefined' ? this.methodServices.recorrectConvertDate(this.modelDateBirth) : null;
        let marriedDate = typeof this.modelMarriedDate != 'undefined' ? this.methodServices.recorrectConvertDate(this.modelMarriedDate) : null;
        let url = '/api/v1/family'

        let dataBody = {
            'familyId': typeof this.id != "undefined" ? this.id : null,
            'fullName': this.modelFamilyName,
            'birthDate': birthDate,
            'gender': this.modelGender,
            'maritalStatus': this.modelMaritalStatus,
            'marriedDate': this.modelMarriedDate,
            'relationship': this.modelRelationship,
            'email': this.modelEmail,
            'mobilePhone': this.modelPhone,
            'bloodType': this.modelBloodtype,
            'familyCardNo': this.modelKK,
            'ktpNo': this.modelNik,
            'aliveStatus': this.modelAliveStatus,
            'nationality': this.modelNationality,
            'address': this.modelAddress,
            'city': this.modelCity,
            'zipCode': this.modelZipcode,
            'birthPlace': this.modelBirthPlace,
        };

        if (this.statusForm == "NEW")
            delete dataBody.familyId
        else
            url = '/api/v1/family/request'

        formData.append('family', JSON.stringify(dataBody));
        formData.append('file', !(typeof this.files == null) ? this.files : null);

        this.methodServices.postData(formData
            , localStorage.getItem('Token'),
            url,
            (result:any) => {
                if (result.error) {
                    this.methodServices.sweetAlert('error', result.error.message);
                } else {
                    this.methodServices.sweetAlert('success', result.message, 'Success', (result: any) => {
                        if (result.value) {
                            this.router.navigate(['/self-service/personal/family']);
                        }
                    });
                }
            });
    }
}
