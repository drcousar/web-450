/*
============================================
; Title: NodeQuiz
; Author: Don Cousar
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

        <div class="example-button-row">
          <button color="primary">
            <a routerLink="/presentation/1">OAuth</a>
          </button>

          <button color="primary">
            <a routerLink="/presentation/2">Microservices</a>
          </button>

          <button color="primary">
            <a routerLink="/presentation/3">Continuous Integration</a>
          </button>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  `,
  styles: [`
    .example-button-row button,
    .example-button-row a {
    margin-right: 8px;
    }
    `]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
