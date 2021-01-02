import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MethodServices } from '../../../../service/method-service';

@Component({
    selector: 'sb-settings',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './settings.component.html',
    styleUrls: ['settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    @ViewChild("fileUpload", {static: false}) fileUpload:ElementRef | undefined;files:any;
    modelChangePassword:any
    modelConfirmPassword:any
    modelOldPassword:any

    constructor(
        private methodServices:MethodServices,
        public userService: UserService,
        private modalService:NgbModal
    ) {}
    ngOnInit() {}

    savePassword() {
        let dataBody = {
            "oldPassword": this.modelOldPassword,
            "newPassword": this.modelChangePassword,
            "confirmationPassword": this.modelConfirmPassword
        }

        this.methodServices.postData(
            dataBody,
            localStorage.getItem('Token'),
            '/api/v1/user/changepassword',
            (result:any) => {
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else
                    this.methodServices.sweetAlert('success', result.message, 'Success', (response:any) => {
                        location.reload()
                    })
            }
        )
    }

    changeEvent(event:any) {
        this.files = event.target.files.item(0)
    }

    saveImage() {
        let formData = new FormData()
        formData.append('file', !(typeof this.files == null) ? this.files : null)

        this.methodServices.postData(
            formData
            , localStorage.getItem("Token"),
            '/api/v1/user/changeprofilepicture',
            (result:any) => {
                if (result.error)
                    this.methodServices.sweetAlert('error', result.error.message)
                else
                    this.methodServices.sweetAlert('success', result.message, "Success", (result: any) => {
                        if (result.value) {
                            location.reload()
                        }
                    })
            })
    }

    openModal(content:any, idxData:any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, scrollable: true })
    }
}
