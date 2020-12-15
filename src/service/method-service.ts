import { Injectable, OnInit } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Location } from '@angular/common';
import { environment } from '../environments/environment'
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})

export class MethodServices {
    dataUser = []
    userAuthorities = []
    token_status:boolean = false
    error_msg:string = "";
    error_code:number = 0;
    error_page_code:number = 0;
    access_token:any;
    token:any
    title:any

    constructor(private http:HttpClient,
        private location:Location,
                private router:Router) {}


    processToken(remember_status:any, username:any, password:any, callback:any)
    {
        var dataBody =
            {
                "username":username,
                "password":password
            }

        this.http.post(environment.baseUrl + "/users/login",dataBody,{
            headers: {
                "Content-Type": "application/json"
            },
        })
            .subscribe(hasil => {
                    this.getToken(remember_status,hasil,username,password);
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
        this.access_token = tok.access_token;

        this.token_status = true;
        this.title = this.location.prepareExternalUrl(this.location.path())
        var login_exists = this.title.indexOf('/login')

        if (typeof(Storage) !== 'undefined')
            localStorage.setItem("token",this.access_token)

        if (this.access_token !== null && login_exists !== -1) {
            this.error_msg = "";
            if (localStorage.getItem('username') !== null) //user
            {
                localStorage.removeItem('ZEU@AL!')
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

            this.router.navigate(["/"]);
        }
    }

    getUrlApi(urlApi:string, token:string, callback:any, params?:string) {
        let tempParams = "";
        let api = environment.baseUrl + urlApi
        if(typeof token == "undefined") {
            token = localStorage.get("Token")
        }

        if (!(typeof params == "undefined" || params == "")) {
            tempParams = "?"+params
        }

        this.http.get(api, {
            headers: {
                Authorization: "Bearer" + token
            }
        }).subscribe(result => {
            callback(result)
        }, error => {
            this.getError(error,error.status)
            this.error_page_code = error.status
            callback('Error')
        })
    }

    getError(err_prev:any,err_status:any){
        this.token_status = false;
        if (typeof(err_prev.error.error_description) != 'undefined'){
            this.error_msg = err_prev.error.error_description;
        }
        else{
            this.error_msg = err_prev.error.description;
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
}
