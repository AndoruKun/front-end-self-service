import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FileSaverService } from 'ngx-filesaver';
import { MethodServices } from '../../../../../service/method-service';

@Component({
    selector: 'sb-biodata',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './biodata.component.html',
    styleUrls: ['biodata.component.scss'],
})
export class BiodataComponent implements OnInit {
    fromDate:any | null;
    toDate:any | null;
    employeeList:any[] = [
        {
            id: "ALL",
            text: "All"
        }
    ]
    statusList:any[] = [
        {
            id: "ALL",
            text: "All"
        },
        {
            id: "APPROVAL",
            text: "Approval"
        },
        {
            id: "REJECTED",
            text: "Rejected"
        },
        {
            id: "CANCELED",
            text: "Canceled"
        },
        {
            id: "PENDING",
            text: "Pending"
        }
    ]
    arrEmployeeList: Array<Select2OptionData> | undefined;
    arrStatusList: Array<Select2OptionData> | undefined;
    modelFilterEmployee:any
    modelFilterStatus:any

    constructor(
        private calendar: NgbCalendar,
        private _FileSaverService:FileSaverService,
        public formatter: NgbDateParserFormatter,
        private methodServices:MethodServices
    ) {}
    ngOnInit() {
        this.loadAllEmployee()
        this.fromDate = this.calendar.getToday()
        this.toDate = this.calendar.getToday()
    }

    onDateSelection(date: NgbDate, typeChange:any) {
        if (typeof typeChange != "undefined" && typeChange == "fromDate")
            this.fromDate = date;
        else if (typeof typeChange != "undefined" && typeChange == "toDate")
            this.toDate = date;

        if (this.fromDate.after(this.toDate)) {
            this.toDate = this.fromDate
        }
    }

    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
    }

    loadAllEmployee() {
        this.methodServices.getUrlApi(
            '/api/v1/employee/allemployee',
            localStorage.getItem('Token'),
            (response:any) => {
                for (let data of response) {
                    this.employeeList.push({
                        id: data.employeeNo,
                        text: data.firstName+" "+data.lastName
                    })
                }
                this.arrEmployeeList =[...this.employeeList]
                this.arrStatusList = [...this.statusList]
            }
        )
    }

    filter() {
        let fromDateString = this.methodServices.recorrectConvertDate(this.fromDate)
        let toDateString = this.methodServices.recorrectConvertDate(this.toDate)

        let params = 'startDate='+fromDateString+'&endDate='+toDateString

        if (typeof this.modelFilterEmployee != "undefined") {
            if (this.modelFilterEmployee != "ALL" && this.modelFilterEmployee != null)
                params += '&employeeNo='+this.modelFilterEmployee
        }
        if (typeof this.modelFilterStatus != "undefined") {
            if (this.modelFilterStatus != "ALL" && this.modelFilterStatus != null)
                params += '&status='+this.modelFilterStatus
        }

        this.methodServices.getUrlApiFile(
            '/api/v1/report/employee',
            localStorage.getItem('Token'),
            (response:any) => {
                this._FileSaverService.save(response, "report_address.xlsx")
            },
            params,
            "api"
        )
    }
}
