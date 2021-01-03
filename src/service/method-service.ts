import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from '../environments/environment'
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '@modules/auth/models';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';


@Injectable({providedIn:'root'})

export class MethodServices {
    sideNavItems!: SideNavItems
    userAuthorities = []
    token_status:boolean = false
    error_msg:string = "";
    error_code:number = 0;
    error_page_code:number = 0;
    access_token:any;
    token:any
    title:any
    apiLoaded: Observable<boolean> | undefined;

    constructor(private http:HttpClient,
        private location:Location,
                private router:Router) {
    }


    processToken(remember_status:any, username:any, password:any, callback:any)
    {
        var dataBody =
            {
                "email":username,
                "password":password
            }

        this.http.post<any>(environment.baseUrl + "/users/login",dataBody,{
            headers: {
                "Content-Type": "application/json"
            }
        }).subscribe(result => {
                    this.getToken(remember_status,result,username,password);
                    callback(this.error_msg,this.access_token)
                },
                err => {
                    this.getError(err,err.status);
                    // console.log(err)
                    callback(this.error_msg,this.access_token)
                }
            )
    }


    getToken(remember_status:any,tok:any,username:any,password:any)
    {
        this.token = tok;
        this.access_token = tok.Authorization
        this.token_status = true;
        this.title = this.location.prepareExternalUrl(this.location.path())
        var login_exists = this.title.indexOf('/auth/login')
        if (this.userAuthorities.length == 0)
            this.decodeJWT(this.access_token)

        if (typeof(Storage) !== 'undefined')
            localStorage.setItem("Token",this.access_token)

        if (this.access_token !== null) {
            this.error_msg = "";
            if (localStorage.getItem('username') !== null) //user
            {
                localStorage.removeItem('username')
            }
            if (remember_status == true){
                localStorage.setItem('username',username)
            }

            if (localStorage.getItem('password') !== null) //password
            {
                localStorage.removeItem('password')
            }
            if (remember_status == true){
                localStorage.setItem('password',password)
            }

            if (localStorage.getItem('remember_me') !== null) {
                localStorage.removeItem('remember_me')
            }

            if (remember_status) {
                localStorage.setItem('remember_me', remember_status)
            }

            this.router.navigate(["/dashboard"]);
        }
    }

    getUrlApi(urlApi:any, token:any, callback:any, params?:any) {
        let tempParams = "";
        let api = environment.baseUrl + urlApi
        if(typeof token == "undefined") {
            token = localStorage.get("Token")
        }
        if (typeof params != "undefined" && params != "") {
            tempParams = "?"+params
        } else {
            tempParams = ""
        }

        this.http.get(api + tempParams, {
            headers: {
                Authorization: token
            },
        }).subscribe(result => {
            callback(result)
        }, error => {
            this.error_page_code = 400
            callback('Error')
        })
    }

    getUrlApiFile(urlApi:any, token:any, callback:any, params?:any, typeApi?:any) {
        let tempParams = "";
        let api = urlApi

        if (typeof typeApi != "undefined") {
            api = environment.baseUrl + urlApi
        }

        if(typeof token == "undefined") {
            token = localStorage.get("Token")
        }
        if (typeof params != "undefined" && params != "") {
            tempParams = "?"+params
        } else {
            tempParams = ""
        }

        this.http.get(api + tempParams, {
            headers: {
                Authorization: token
            },
            observe: 'response',
            responseType: 'blob'
        }).subscribe(resp => {
            callback(resp.body)
        }, error => {
            console.log(error)
            this.error_page_code = 400
            callback('Error')
        })
    }

    getError(err_prev:any,err_status:any){
        this.token_status = false;
        if (err_prev.error){
            this.error_msg = err_prev.message;
        }
        else{
            this.error_msg = err_prev.message;
        }

        this.error_code = err_status;

        if (this.error_code == 401 || this.error_code == 400) {
            localStorage.removeItem("")
            this.userAuthorities = [];
            this.router.navigate(["/auth/login"]);
            this.error_msg = this.error_msg;
        }
        else
        if(this.error_code == 500){
            this.error_msg = 'Could not process this operation. Please contact Admin.'
        }
        else{
            this.error_msg = 'Please Check your connection.'
        }
    }

    decodeJWT(token:any) {
        const helper = new JwtHelperService()
        let getToken = token.split(" ")
        let decodeJWT = helper.decodeToken(getToken[1])
        this.userAuthorities = decodeJWT.Roles;
    }

    checkAccessAuthorization(accessPermission?:string) {
        if (this.userAuthorities.length == 0)
            this.decodeJWT(localStorage.getItem('Token'))

        if (this.userAuthorities.length > 0) {
            let checkAccess: number;
            if (typeof accessPermission != "undefined") {
                if (accessPermission.includes(",")) {
                    let splitAccessPermission = accessPermission.split(",")
                    for (let i = 0; i < splitAccessPermission.length; i++) {
                        // @ts-ignore
                        checkAccess = this.userAuthorities.indexOf(splitAccessPermission[i])
                        if (checkAccess != -1)
                            return true
                    }
                } else {
                    // @ts-ignore
                    checkAccess = this.userAuthorities.indexOf(accessPermission)
                    if (checkAccess != -1)
                        return true
                    else
                        return false
                }
            }
        }
    }

    getPosition(): Promise<any>
    {
        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(resp => {

                    resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
                },
                err => {
                    reject(err);
                });
        });

    }
    postData(dataObj:any,token:any,urlapi:any,callback:any){

        let dataBody = dataObj
        this.http.post(environment.baseUrl + urlapi
            , dataBody
            ,{
                headers: {
                    Authorization: token
                }
            }
        ).subscribe(hasil => {
                callback(hasil)
            }
            , err => {
                callback(err,'')
            }
        )
    }
    sweetAlert(type:any,msg:any,title?:any, confirmFunc?:any) {
        switch(type) {
            case "error":
                // @ts-ignore
                swal.fire({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttonsStyling: false,
                    confirmButtonText: 'Confirm',
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                })
                break
            case "success":
                // @ts-ignore
                swal.fire({
                    title: typeof title == "undefined" ? "Success" : title,
                    text: msg,
                    icon: 'success',
                    buttonsStyling: false,
                    confirmButtonText: 'Confirm',
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                }).then((result:any) => {
                    confirmFunc(result)
                })
        }
    }

    recorrectConvertDate(date:any) {
        let year = date.year
        let month = date.month < 10 ? "0"+date.month : date.month
        let day = date.day < 10 ? "0"+date.day : date.day

        return year+"-"+month+"-"+day
    }
}
