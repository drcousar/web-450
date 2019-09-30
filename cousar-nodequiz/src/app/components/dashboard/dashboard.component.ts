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
      <mat-card-content class="buttonGroup">
        <h2>Please select your topic:</h2>

        <button class="buttonStyle" mat-raised-button color="accent">
          QUIZ 1 Placeholder
        </button>

        <button class="buttonStyle" mat-raised-button color="accent">
          QUIZ 2 Placeholder
        </button>

        <button class="buttonStyle" mat-raised-button color="accent">
          QUIZ 3 Placeholder
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
