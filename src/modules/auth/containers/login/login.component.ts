import { ChangeDetectionStrategy, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild('email') user_email:ElementRef;
    @ViewChild('password') user_password:ElementRef;
    @ViewChild('remember_me') remember_me:ElementRef;

    constructor(
        public methodService:MethodServices,
        private user_name:ElementRef) {}

    modelEmail:string = ""
    modelPassword:string = ""
    modelRememberMe:boolean = false
    err_msg:string = ""

    ngOnInit() {
        if (localStorage.getItem("email") !== null) {
            let email = localStorage.getItem("email")
            this.modelEmail = email? email : ""
        }
        if (localStorage.getItem("password") !== null) {
            let password = localStorage.getItem("password")
            this.modelPassword = password? password: ""
        }
        if (localStorage.getItem("remember_me") !== null) {
            let remember_me = localStorage.getItem("remember_me")
            this.modelRememberMe = remember_me? true : false
        }
    }

    login() {
        this.modelEmail = this.user_email.nativeElement.value
        this.modelPassword = this.user_password.nativeElement.value
        this.modelRememberMe = this.remember_me.nativeElement.value

        this.methodService.processToken(
            this.modelRememberMe,
            this.modelEmail,
            this.modelPassword,
            (error_msg_res:any,access_token_res:any) => {
            this.err_msg = error_msg_res
        })

        // this.methodService.processToken(
        //     this.modelRememberMe,
        //     this.modelEmail,
        //     this.modelPassword,
        //     (error_msg_res:any,access_token_res:any) => {
        //     this.err_msg = error_msg_res
        // })
    }

}
