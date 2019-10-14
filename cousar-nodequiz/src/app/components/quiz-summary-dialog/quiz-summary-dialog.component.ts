/*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Contributor: Professor Krasso of Bellevue (Used demontration as inspriation for Modal/Dialog Code)
; Date: 03 October 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../DialogData';
import { CookieService } from 'ngx-cookie-service';
import { QuizComponent } from "../quiz/quiz.component";

@Component({
  selector: 'app-quiz-summary-dialog',
  templateUrl: './quiz-summary-dialog.component.html',
  styleUrls: ['./quiz-summary-dialog.component.css']
})
export class QuizSummaryDialogComponent implements OnInit {

  quizSummary: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: string;
  quizScore: number;

  constructor(
    private dialogRef: MatDialogRef<QuizSummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data, private cookieService: CookieService
  ) { 
    this.quizSummary = data.quizSummary;
    this.quizScore = data.quizScore;
    console.log('Dialog Component Data: ' + data);
    //this.correctAnswers = this.quizSummary.correctAnswers;
    //this.selectedAnswers = this.quizSummary.selectedAnswers;
    this.employeeId = this.cookieService.get('employeeId');
  }

  @Input() public quizResults;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('Dialog Results: ' + this.quizResults);
  }

}
