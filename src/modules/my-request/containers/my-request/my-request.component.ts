import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-my-request',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './my-request.component.html',
    styleUrls: ['my-request.component.scss'],
})
export class MyRequestComponent implements OnInit {
    constructor(private methodServices:MethodServices) {}
    ngOnInit() {}
}
