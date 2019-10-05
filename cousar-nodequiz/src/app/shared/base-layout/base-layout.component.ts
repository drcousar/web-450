    /*
============================================
; Title: NodeQuiz
; Author: Don Couasr
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-base-layout',
  template: `
  <div>
    <header>
      <!-- Navbar -->
      <mat-toolbar class="menu" role="header" color="primary">
        <mat-toolbar-row>
          <button mat-button class="toolbar__icon-button mat-button">
            
            <span style="margin-left: 5px !important" (click)="navHome()"
              >NodeQuiz</span
            >
          </button>

          <div fxFlex></div>

          <button
            mat-icon-button
            class="toolbar__icon-button"
            [matMenuTriggerFor]="menu"
          >
          <span style="margin-right: 15px !important" 
          >Session</span
        >
            
          </button>
          <mat-menu #menu="matMenu">

            <button (click)="logOut()" mat-menu-item>
              <span>Logout</span>
            </button>
          </mat-menu>
        </mat-toolbar-row>
      </mat-toolbar>
      <!-- endNavbar -->
    </header>

    <!-- Main page content -->
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `,
  styles: []
})
export class BaseLayoutComponent implements OnInit {

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit() {
  }


logOut() {
    this.cookie.get("isAuthenticated");
    this.cookie.delete("isAuthenticated");
    this.router.navigate(["/session/login"]);
  }

  navHome() {
    this.router.navigate(["/"]);
  }
}
