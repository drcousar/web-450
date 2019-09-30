    /*
============================================
; Title: NodeQuiz
; Author: Don Couasr
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, CanActivate, Router,  RouterStateSnapshot} from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuthenticated = this.cookieService.get("isAuthenticated");

    //validate employee id
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(["/sessions/login"]);
      return false;
    }
  }
}