import { ChangeDetectionStrategy, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-absence',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './absence.component.html',
    styleUrls: ['absence.component.scss'],
})
export class AbsenceComponent implements OnInit {
    @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined;files:any;
    @ViewChild("absenceType") absenceType:ElementRef | undefined
    hoveredDate: NgbDate | null = null;
    faCalendar = faCalendar;

    fromDate:any | null;
    toDate:any | null;
    modelType:any
    modelSubstitute:any
    modelRemark:any
    disabledBtn:boolean = true
    params:any
    dataAbsence:any
    modelContentType:any;
    modelTotalAbsence:any = 0;

    constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private methodServices:MethodServices) {}

    ngOnInit() {
        this.fromDate = this.calendar.getToday()
        this.toDate = this.calendar.getToday()
        this.modelContentType = "sakit"
        this.getDataType("sakit")
    }

    onDateSelection(date: NgbDate, typeChange:any) {
        if (typeof typeChange != "undefined" && typeChange == "fromDate")
            this.fromDate = date;
        else if (typeof typeChange != "undefined" && typeChange == "toDate")
            this.toDate = date;

        if (this.fromDate.after(this.toDate)) {
            this.toDate = this.fromDate
        }
        this.calcTotalAbsence(this.fromDate, this.toDate)
    }

    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
    }

    changeEvent(event:any, type:any) {
        switch (type) {
            case "typeAbsence":
                this.getDataType(event.target.value)
                break
            case "type":
                this.modelType = event.target.value
                break
            case "remark":
                this.modelRemark = event.target.value
                break
            case "uploadFile":
                this.files = event.target.files.item(0)
                break
        }
        if (this.modelRemark != "" && typeof this.modelRemark != "undefined")
            this.disabledBtn = false
        else
            this.disabledBtn = true
    }

    getDataType(contentType:any) {
        this.params = "name="+contentType
        this.methodServices.getUrlApi(
            '/api/v1/absencetype?'+this.params,
            localStorage.getItem('Token'),
            (result:any) => {
                if (typeof result != "undefined") {
                    this.dataAbsence = []
                    for (let data of result) {
                        this.dataAbsence.push({
                            id: data.absenceTypeId,
                            name: data.name
                        })
                    }
                }
            }
        )
    }

    calcTotalAbsence(date1:any, date2:any) {
        let fromDateString = date1.year+"-"+date1.month+"-"+date1.day
        let toDateString = date2.year+"-"+date2.month+"-"+date2.day
        let fromDateConvert:any = new Date(fromDateString)
        let toDateConvert:any = new Date(toDateString)
        let diffTime = Math.abs(toDateConvert - fromDateConvert);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.modelTotalAbsence = diffDays
    }

    submitProc() {
        let formData = new FormData()
        let fromDateString = this.fromDate.year+"-"+this.fromDate.month+"-"+this.fromDate.day
        let toDateString = this.toDate.year+"-"+this.toDate.month+"-"+this.toDate.day
        let absenceType = typeof this.absenceType == "undefined" ? null : Number(this.absenceType.nativeElement.value)

        let dataBody = {
            "amount": this.modelTotalAbsence+1,
            "startDate": fromDateString.toString(),
            "endDate": toDateString.toString(),
            "remark": this.modelRemark,
            "type": this.modelContentType,
            "absenceTypeId": absenceType
        }


        formData.append('absence', JSON.stringify(dataBody))
        formData.append('file', !(typeof this.files == null) ? this.files : null)

        this.methodServices.postData(formData
        , localStorage.getItem("Token"),
            '/api/v1/absence',
            (result:any) => {
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else
                    this.methodServices.sweetAlert('success', result.message)
            })
    }
}
