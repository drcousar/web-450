    /*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [`
  .container{
    text-align: center;
    margin-top: 150px;
    font-family: Arial, Helvetica, sans-serif
  }
  
  .form {
    width: 30%;
    height: 200px;
    margin: 0 auto;
    background-color: linen;
  }
  small {
    color: maroon;
    display: block;
    width: 100%;
    min-width: 100% !important;
    margin-top: 10px;
  }
  .inputStyle{
    margin-top: 50px
  }
  `]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  userLogin: string;
  form: FormGroup;

  //Define 
  constructor(
    private cookie: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  //restrict input to only numerical values
  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ]
    });
  }

  //Call web service
  onSubmit() {
    const employeeId = this.form.controls["employeeId"].value;

    this.http.get("/api/employees/" + employeeId).subscribe(res => {
      if (res) {
        console.log(res)
        this.cookie.set("isAuthenticated", "true", 7);
        this.router.navigate(["/"]);
      } else {
        this.errorMessage = "Invalid Employee ID";
      }
    });
  }
}

