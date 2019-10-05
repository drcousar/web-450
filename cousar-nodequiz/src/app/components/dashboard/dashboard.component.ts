/*
============================================
; Title: NodeQuiz
; Author: Don Couasr
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <div class="container">
    <mat-card color="accent" class="form">
      <mat-card-content>
      
        <h2>Please select your topic:</h2>

        <button class="buttonStyle" mat-raised-button color="accent">
          <a routerLink="/presentation/1">OAuth</a>
        </button>

        <button class="buttonStyle" mat-raised-button color="accent">
          <a routerLink="/presentation/2">Microservices</a>
        </button>

        <button class="buttonStyle" mat-raised-button color="accent">
          <a routerLink="/presentation/3">Continuous Integration</a>
        </button>
      </mat-card-content>
    </mat-card>
  </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
