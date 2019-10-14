/*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cumulative-summary',
  template: `
  <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">Quiz Id</th>
      <th scope="col">Date</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody *ngFor="let item of quizResults">
    <tr>
      <td>{{ item.employeeId }}</td>
      <td>{{ item.quizId }}</td> 
      <td>{{ item.date | date: "medium" }}</td>
      <td>{{ item.score}}%</td>
    </tr>
  </tbody>
</table>
  `,
  styles: []
})
export class CumulativeSummaryComponent implements OnInit {
  errorMessage: string;
  quizResults: any;

//Define 
constructor(
  private http: HttpClient
) {}


  ngOnInit() {

    this.http.get("/api/summary/").subscribe(res => {
      if (res) {
        console.log('Showing Angular Cumulative Summary: ');
        console.log(res);
        this.quizResults = res;   
      } else {
        this.errorMessage = "Invalid Summary Entries";
      }
    });
  }

}
