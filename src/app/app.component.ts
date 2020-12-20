import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { catchError, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MethodServices } from '../service/method-service';
import { of } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'sb-admin-angular';

    constructor(public router: Router, private titleService: Title, private methodServices: MethodServices) {
        this.router.events
            .pipe(filter(event => event instanceof ChildActivationEnd))
            .subscribe(event => {
                let snapshot = (event as ChildActivationEnd).snapshot;
                while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                this.titleService.setTitle(snapshot.data.title || 'SB Admin Angular');
            });
    }
}
