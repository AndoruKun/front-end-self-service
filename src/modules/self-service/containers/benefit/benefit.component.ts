import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-benefit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './benefit.component.html',
    styleUrls: ['benefit.component.scss'],
})
export class BenefitComponent implements OnInit {
    @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined;files:any;
    transactionDate:any | null;
    modelType:any
    modelClaimFor:any
    modelReason:any
    disabledBtn:boolean = true
    modelRemark:any
    modelClaimAmount:any
    disabledSelection:boolean = true
    typeClaim = [
        "",
        "Claim Reimbursement"
    ]
    claimFor = [
        "self"
    ]
    reason = [
        "",
        "Reimbursement"
    ]
    constructor(private calendar: NgbCalendar,
                public formatter: NgbDateParserFormatter,
                private methodServices:MethodServices,
                private currencyPipe:CurrencyPipe,) {}
    ngOnInit() {
        this.transactionDate = this.calendar.getToday()
        this.modelType = ""
        this.modelClaimFor = "self"
        this.modelReason = ""
    }

    onDateSelection(date: NgbDate, typeChange:any) {
        if (typeof typeChange != "undefined" )
            this.transactionDate = date;
    }

    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
    }

    changeEvent(event:any, type:any) {
        switch (type) {
            case "type":
                this.modelType = event.target.value
                let idxSplice1 = this.typeClaim.indexOf("")
                if (idxSplice1 > -1)
                    this.typeClaim.splice(idxSplice1, 1)
                this.disabledSelection = false
                break
            case "reason":
                let idxSplice2 = this.reason.indexOf("")
                if (idxSplice2 > -1)
                    this.reason.splice(idxSplice2, 1)
                this.modelReason = event.target.value
                break
            case 'claimAmount':
                this.modelClaimAmount = event.target.value.replace(/[Rp,]/g, "")
            case "remark":
                this.modelRemark = event.target.value
                break
            case "uploadFile":
                this.files = event.target.files.item(0)
                break
        }
        if (this.modelRemark != "" && typeof this.modelRemark != "undefined" &&
            this.modelReason != "" && typeof this.modelClaimAmount != "undefined" &&
            typeof this.files != "undefined")
            this.disabledBtn = false
        else
            this.disabledBtn = true
    }
    onKeyPress(event:any) {
        this.modelClaimAmount = event.target.value
        // @ts-ignore
        if(((this.modelClaimAmount.length === 12 && window.getSelection().toString() == '') || event.charCode == 101) || event.charCode == 45 || (window.getSelection().toString() != '' && !(event.charCode >= 48 && event.charCode <= 57))) {return false}
    }

    maskCurrency(event:any) {
        if (event.target.value != "") {
            if (isNaN(Number(event.target.value))) {
                event.target.value = ''
            }
            else {
                event.target.value = this.currencyPipe.transform(event.target.value, ' ', 'symbol')
            }
        }
    }

    onFocus(event:any) {
        if (event.target.value != "") {
            var num = event.target.value.replace(/[Rp,]/g, "");
            event.target.value = num
        }
    }

    submitProc() {
        let formData = new FormData()
        let transactionDate = this.transactionDate.year+"-"+this.transactionDate.month+"-"+this.transactionDate.day

        let dataBody = {
            "benefitReason": this.modelReason,
            "amount": this.modelClaimAmount,
            "transactionDate": transactionDate,
            "remark": this.modelRemark
        }

        formData.append("benefitrequest", JSON.stringify(dataBody))
        formData.append("file", !(typeof this.files == null) ? this.files : null)

        this.methodServices.postData(formData
            , localStorage.getItem("Token"),
            '/api/v1/benefit/request',
            (result:any) => {
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else
                    this.methodServices.sweetAlert('success', result.message)
            })
    }
}
