import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-timesheet',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './timesheet.component.html',
    styleUrls: ['timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
    modelToday:any
    params:any
    attendent:any
    constructor(private calendar:NgbCalendar, private methodServices:MethodServices) {}
    ngOnInit() {
        this.modelToday = this.calendar.getToday()
        let filter = "month="+this.modelToday.month+"&year="+this.modelToday.year
        this.showTimesheet()
    }

    showTimesheet() {
        this.params = "month="+this.modelToday.month+"&year="+this.modelToday.year
        this.methodServices.getUrlApi(
            '/api/v1/attempdaily/timesheet',
            localStorage.getItem('Token'),
            (res:any) => {
                this.attendent = res
            },
        this.params
        )
    }
}
