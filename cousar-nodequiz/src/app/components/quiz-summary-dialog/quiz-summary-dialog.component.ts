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
  questions: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: string;
  quizScore: number;
  foo: string;
  myQuestions: [];

  constructor(
    private dialogRef: MatDialogRef<QuizSummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data, @Inject(MAT_DIALOG_DATA) questionData, private cookieService: CookieService
  ) { 
    this.quizSummary = data.quizSummary;
    this.quizScore = data.quizScore;
    this.questions = data.questions;
    this.correctAnswers = data.correctAnswers;
    this.selectedAnswers = data.selectedAnswers;
    this.myQuestions = data.myQuestions;
    //this.correctAnswers = data.correctAnswers;
    //this.selectedAnswers = data.selectedAnswers;
    
    console.log('foo');
    console.table(this.quizSummary);

    console.log('Dialog Component Data: ');
    console.table(data);

    this.employeeId = this.cookieService.get('employeeId');
    console.log('Dialog Questions');
    console.table(this.questions);

    console.log('Dialog My Questions');
    console.table(this.myQuestions);
  }

  @Input() public quizResults;
  @Input() public questionsAnsweredWrong;
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('Dialog Results: ' + this.quizResults);
  }

}
