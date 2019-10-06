    /*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { AuthGuardService } from "./shared/auth-guard/auth-guard.service";

@Component({
  selector: 'app-root',
  template: "<router-outlet></router-outlet>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cousar-nodequiz';

  constructor(
    private cookie: CookieService,
    private router: Router,
    private authGuard: AuthGuardService
  ) {
    let test = this.cookie.get("isAuthenticated");
    console.log(test);
    if (!test) {
      router.navigate(["/session/login"]);
    }
  }
}
