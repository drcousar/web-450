    /*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 03 October 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { QuizSummaryDialogComponent } from '../quiz-summary-dialog/quiz-summary-dialog.component';
import { Router } from "@angular/router";
import * as moment from "moment";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  title = 'Take Quiz';
  employeeId: any;
  quiz: number;
  quizChoice: string;
  myQuiz: any;
  //http: HttpClient;
  quizResults: any;
  questions: any = [];
  question: any = [];
  displayResults: any;
  router: Router;
 

//BEGIN Mock JSON Data;  In real production this data would import into MongoDB 
 oauthQuiz: any = [
    {
      quizId: 100,
      questions: [
        {
          id: 1,
          text: '1. What is the best answer to define OAuth?',
          answers: [
            {
            id: 200,
            text: 'a. An authorization framework that enables 3rd party applications to obtain limited access to a web service',
            isCorrect: false
            },
            {
              id: 201,
              text: 'b. A simple way to publish and interact with protected data',
              isCorrect: false
            },
            {
              id: 202,
              text: 'c. A more safe and secure way to give you access to data',
              isCorrect: false
            },
            {
              id: 203,
              text: 'd. All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 2,
          text: '2. Which of the following is OAuth not used to protect?',
          answers: [
            {
            id: 204,
            text: 'a. Web Applications',
            isCorrect: false
            },
            {
              id: 205,
              text: 'b. Desktop Applications',
              isCorrect: false
            },
            {
              id: 206,
              text: 'c. Mobile Applications',
              isCorrect: false
            },
            {
              id: 207,
              text: 'd. Personal Computer BIOS',
              isCorrect: true
            }
          ]
        },
        {
          id: 3,
          text: '3. In the 6 steps to OAuth, what is step 1?',
          answers: [
            {
            id: 208,
            text: 'a. The user shows intent',
            isCorrect: true
            },
            {
              id: 209,
              text: 'b. The consumer gets permission',
              isCorrect: false
            },
            {
              id: 210,
              text: 'c. The user gives permissions',
              isCorrect: false
            },
            {
              id: 211,
              text: 'd. The user is redirected to the service provider',
              isCorrect: false
            }
          ]
        },
        {
          id: 4,
          text: '4.	In the 6 steps to OAuth, what is step 2?',
          answers: [
            {
            id: 212,
            text: 'a. The consumer gets permission',
            isCorrect: true
            },
            {
              id: 213,
              text: 'b. The user shows intent',
              isCorrect: false
            },
            {
              id: 214,
              text: 'c.	The user gives permissions',
              isCorrect: false
            },
            {
              id: 215,
              text: 'd. The user is redirected to the service provider',
              isCorrect: false
            }
          ]
        },
        {
          id: 5,
          text: '5. In the 6 steps to OAuth, what is step 3?',
          answers: [
            {
            id: 216,
            text: 'a. The user is redirected to the service provider',
            isCorrect: true
            },
            {
              id: 217,
              text: 'b. The user shows intent',
              isCorrect: false
            },
            {
              id: 218,
              text: 'c. The user gives permission',
              isCorrect: false
            },
            {
              id: 219,
              text: 'd. Personal Computer BIOS',
              isCorrect: false
            }
          ]
        },
        {
          id: 6,
          text: '6. In the 6 steps to OAuth, what is step 4?',
          answers: [
            {
            id: 220,
            text: 'a. The user gives permission',
            isCorrect: true
            },
            {
              id: 221,
              text: 'b. The user is redirected to the service provider',
              isCorrect: false
            },
            {
              id: 222,
              text: 'c. The consumer accesses the protected resource',
              isCorrect: false
            },
            {
              id: 223,
              text: 'd. The consumer obtains an access token',
              isCorrect: true
            }
          ]
        },
        {
          id: 7,
          text: '7.	In the 6 steps to OAuth, what is step 5?',
          answers: [
            {
            id: 224,
            text: 'a. The consumer obtains an access token',
            isCorrect: true
            },
            {
              id: 225,
              text: 'b. The consumer Accesses the protected resource',
              isCorrect: false
            },
            {
              id: 226,
              text: 'c. The user gives permission',
              isCorrect: false
            },
            {
              id: 227,
              text: 'd. The consumer gets permission',
              isCorrect: true
            }
          ]
        },
        {
          id: 8,
          text: '8. In the 6 steps to OAuth, what is step 6?',
          answers: [
            {
            id: 228,
            text: 'a. The consumer accesses the protected resource',
            isCorrect: true
            },
            {
              id: 229,
              text: 'b. The consumer obtains an access token',
              isCorrect: false
            },
            {
              id: 230,
              text: 'c. The user gives permission',
              isCorrect: false
            },
            {
              id: 231,
              text: 'd.	The user is redirected to the service provider',
              isCorrect: false
            }
          ]
        },
        {
          id: 9,
          text: '9. OAuth 2.0 must be encrypted on the endpoints',
          answers: [
            {
            id: 232,
            text: 'a. True',
            isCorrect: false
            },
            {
              id: 233,
              text: 'b. False',
              isCorrect: true
            },
            {
              id: 234,
              text: 'c. Sometimes',
              isCorrect: false
            },
            {
              id: 235,
              text: 'd. This is a trick question, only with OAuth 1.0 is encryption relevant',
              isCorrect: false
            }
          ]
        },
        {
          id: 10,
          text: '10. OAuth 2.0 supports Federated Identity.',
          answers: [
            {
            id: 236,
            text: 'a. True',
            isCorrect: true
            },
            {
              id: 237,
              text: 'b. False',
              isCorrect: false
            },
            {
              id: 238,
              text: 'c. Sometimes',
              isCorrect: false
            },
            {
              id: 239,
              text: 'd. This is a trick question, only with OAuth 1.0 is federation relevant',
              isCorrect: false
            }
          ]
        }
      ]
    }
  ]

  microservicesQuiz: any = [
    {
      quizId: 101,
      questions: [
        {
          id: 1,
          text: '1. A microservice is an architecture that structures an application as ___________.',
          answers: [
            {
            id: 240,
            text: 'a. A collection of services',
            isCorrect: true
            },
            {
              id: 241,
              text: 'b. A way to safe way to secure an application',
              isCorrect: false
            },
            {
              id: 242,
              text: 'c. A load balanced method of interacting with HTTP',
              isCorrect: false
            },
            {
              id: 243,
              text: 'd. A cloud based solution',
              isCorrect: false
            }
          ]
        },
        {
          id: 2,
          text: '2. Which of the following is NOT a characteristic of microservices?',
          answers: [
            {
            id: 244,
            text: 'a. Highly maintainable',
            isCorrect: false
            },
            {
              id: 245,
              text: 'b. Loosely coupled',
              isCorrect: false
            },
            {
              id: 246,
              text: 'c. Restricted to one language per solution',
              isCorrect: true
            },
            {
              id: 247,
              text: 'd. Organized around business capabilities',
              isCorrect: false
            }
          ]
        },
        {
          id: 3,
          text: '3.	An API Gateway is a ____________ for all clients into microservices.',
          answers: [
            {
            id: 248,
            text: 'a.	Exit point',
            isCorrect: false
            },
            {
              id: 249,
              text: 'b.	Single point of access',
              isCorrect: true
            },
            {
              id: 250,
              text: 'c.	Recommended protocol',
              isCorrect: false
            },
            {
              id: 251,
              text: 'd.	All of the above',
              isCorrect: false
            }
          ]
        },
        {
          id: 4,
          text: '4.	Which of the following is NOT an advantage of an API Gateway?',
          answers: [
            {
            id: 252,
            text: 'a.	Improve fault isolation',
            isCorrect: false
            },
            {
              id: 253,
              text: 'b.	Improved productivity and speed',
              isCorrect: false
            },
            {
              id: 254,
              text: 'c.	Ease of understanding',
              isCorrect: false
            },
            {
              id: 255,
              text: 'd.	Forces technology lock-in',
              isCorrect: true
            }
          ]
        },
        {
          id: 5,
          text: '5.	Which of the following is NOT a disadvantage of an API Gateway?',
          answers: [
            {
            id: 256,
            text: 'a.	Testing a microservices-based application can be cumbersome',
            isCorrect: false
            },
            {
              id: 257,
              text: 'b.	Deploying microservices can be complex',
              isCorrect: false
            },
            {
              id: 258,
              text: 'c.	Microservices makes it hard to build and maintain apps',
              isCorrect: true
            },
            {
              id: 259,
              text: 'd.	Each service must be tested and monitored increasing the demand for automation',
              isCorrect: false
            }
          ]
        },
        {
          id: 6,
          text: '6.	Which of the following are microservice deployment options?',
          answers: [
            {
            id: 260,
            text: 'a.	Virtual machines',
            isCorrect: false
            },
            {
              id: 261,
              text: 'b.	Physical machines',
              isCorrect: false
            },
            {
              id: 262,
              text: 'c.	Serverless Solutions',
              isCorrect: false
            },
            {
              id: 247,
              text: 'd.	All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 7,
          text: '7.	Which of the following are popular Microservice Scaling methods?',
          answers: [
            {
            id: 248,
            text: 'a.	X-axis scaling',
            isCorrect: false
            },
            {
              id: 249,
              text: 'b.	Y-axis scaling',
              isCorrect: false
            },
            {
              id: 250,
              text: 'c.	Z-axis scaling',
              isCorrect: false
            },
            {
              id: 251,
              text: 'd.	All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 8,
          text: '8.	What is a top challenge of X-axis scaling?',
          answers: [
            {
            id: 252,
            text: 'a.	It requires more memory to be effective',
            isCorrect: true
            },
            {
              id: 253,
              text: 'b.	It requires more CPU to be effective',
              isCorrect: false
            },
            {
              id: 254,
              text: 'c.	It requires more hard drive space to work',
              isCorrect: false
            },
            {
              id: 255,
              text: 'd.	All of the above',
              isCorrect: false
            }
          ]
        },
        {
          id: 9,
          text: '9.	X-axis scaling______.',
          answers: [
            {
            id: 256,
            text: 'a.	Consists of running multiple copies of an application behind a load balances',
            isCorrect: true
            },
            {
              id: 257,
              text: 'b.	Consists of running multiple identical copies of the application, splitting the application into multiple different services',
              isCorrect: false
            },
            {
              id: 258,
              text: 'c.	Consists of multiple running copies of the code, but each server being responsible for only a subset of the data',
              isCorrect: false
            },
            {
              id: 259,
              text: 'd.	None of the above',
              isCorrect: false
            }
          ]
        },
        {
          id: 10,
          text: '10.	Y-axis scaling______.',
          answers: [
            {
            id: 260,
            text: 'a.	Consists of running multiple copies of an application behind a load balances',
            isCorrect: false
            },
            {
              id: 261,
              text: 'b.	Consists of running multiple identical copies of the application, splitting the application into multiple different services',
              isCorrect: true
            },
            {
              id: 262,
              text: 'c.	Consists of multiple running copies of the code, but each server being responsible for only a subset of the data',
              isCorrect: false
            },
            {
              id: 263,
              text: 'd.	None of the above',
              isCorrect: false
            }
          ]
        }
      ]
    }
  ];

  continuousIntegrationQuiz: any = [
    {
      quizId: 102,
      questions: [
        {
          id: 1,
          text: 'Continuous integration is ______.',
          answers: [
            {
            id: 264,
            text: 'The practice of integrating changes from different developers in the team into a mainline as early as possible.',
            isCorrect: true
            },
            {
              id: 265,
              text: 'The practice of integrating changes from different developers in the team into a mainline as close to the due date as possible.',
              isCorrect: false
            },
            {
              id: 266,
              text: 'Software designed to integrate changes without an administrator’s input.',
              isCorrect: false
            },
            {
              id: 267,
              text: 'Running software 24 hours per day, so the business increases it’s productivity',
              isCorrect: false
            }
          ]
        },
        {
          id: 2,
          text: 'Which of the following is NOT a popular continuous integration tool?',
          answers: [
            {
            id: 268,
            text: 'Jenkins',
            isCorrect: false
            },
            {
              id: 269,
              text: 'Bamboo',
              isCorrect: false
            },
            {
              id: 270,
              text: 'CI/CD',
              isCorrect: true
            },
            {
              id: 271,
              text: 'Semaphoreg',
              isCorrect: false
            }
          ]
        },
        {
          id: 3,
          text: '3.	Which of the following are factors for choosing a continuous integration tool?',
          answers: [
            {
            id: 272,
            text: 'a.	Requirements',
            isCorrect: false
            },
            {
              id: 273,
              text: 'b.	Tech Stack',
              isCorrect: false
            },
            {
              id: 274,
              text: 'c.	How to handle your workflow',
              isCorrect: false
            },
            {
              id: 275,
              text: 'd.	All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 4,
          text: '4.	Which of the following are benefits of continuous integration?',
          answers: [
            {
            id: 276,
            text: 'a.	Reduce Risk',
            isCorrect: false
            },
            {
              id: 277,
              text: 'b.	Faster iterations',
              isCorrect: false
            },
            {
              id: 278,
              text: 'c.	Faster Feedback',
              isCorrect: false
            },
            {
              id: 279,
              text: 'd.	All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 5,
          text: '5.	Which of the following is NOT a best practice for continuous integration?',
          answers: [
            {
            id: 280,
            text: 'a.	Maintain a code repository',
            isCorrect: false
            },
            {
              id: 281,
              text: 'b.	Automate your build',
              isCorrect: false
            },
            {
              id: 282,
              text: 'c.	Require management approval',
              isCorrect: true
            },
            {
              id: 283,
              text: 'd.	Make your build self-testing',
              isCorrect: false
            }
          ]
        },
        {
          id: 6,
          text: '6.	Which of the following ARE best practices for continuous integration?',
          answers: [
            {
            id: 284,
            text: 'a.	Everyone on the team can see the results of your latest build',
            isCorrect: false
            },
            {
              id: 285,
              text: 'b.	Every commit should be built',
              isCorrect: false
            },
            {
              id: 286,
              text: 'c.	Daily commits to the baseline by everyone on the team',
              isCorrect: false
            },
            {
              id: 287,
              text: 'd.	All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 7,
          text: '7.	Which of the following is NOT a popular repository?',
          answers: [
            {
            id: 288,
            text: 'a.	Github',
            isCorrect: false
            },
            {
              id: 289,
              text: 'b.	Bitbucket',
              isCorrect: false
            },
            {
              id: 290,
              text: 'c.	TFS',
              isCorrect: false
            },
            {
              id: 291,
              text: 'd.	Docker',
              isCorrect: true
            }
          ]
        },
        {
          id: 8,
          text: '8.	Which of the following is a popular automated testing tool?',
          answers: [
            {
            id: 292,
            text: 'a.	Selenium',
            isCorrect: true
            },
            {
              id: 293,
              text: 'b.	HP Fortify',
              isCorrect: false
            },
            {
              id: 294,
              text: 'c.	Black Duck',
              isCorrect: false
            },
            {
              id: 295,
              text: 'd.	None of the above',
              isCorrect: false
            }
          ]
        },
        {
          id: 9,
          text: '9.	What is the key feature of continuous integration?',
          answers: [
            {
            id: 296,
            text: 'a.	Automation',
            isCorrect: true
            },
            {
              id: 297,
              text: 'b.	Repositories',
              isCorrect: false
            },
            {
              id: 298,
              text: 'c.	Logging',
              isCorrect: false
            },
            {
              id: 299,
              text: 'd.	All of the above',
              isCorrect: false
            }
          ]
        },
        {
          id: 10,
          text: '10.	Without continuous integration, developers must:',
          answers: [
            {
            id: 300,
            text: 'a.	Manually unit test their code',
            isCorrect: false
            },
            {
              id: 301,
              text: 'b.	Manually integrate their code',
              isCorrect: false
            },
            {
              id: 302,
              text: 'c.	Manually deploy their code',
              isCorrect: false
            },
            {
              id: 303,
              text: 'd.	All of the above',
              isCorrect: true
            }
          ]
        }
      ]
    }
  ];  
//END MOCK JSON Data


  constructor(private route: ActivatedRoute, private cookieService: CookieService, public dialog: MatDialog, private http: HttpClient) { 
    this.quiz = parseInt(this.route.snapshot.paramMap.get("id"), 10);
    this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);
    
    //need to come up with some logic to make this dynamic, maybe loop thru db
    if (this.quiz === 1) {
      this.quizChoice = "OAuth";
      //this.myQuiz = this.oauthQuiz;
      this.myQuiz = this.oauthQuiz.filter(q => q.quizId === 100)[0];
      console.log(this.myQuiz);
    } else if (this.quiz === 2) {
      this.quizChoice = "Microservices";
      this.myQuiz = this.microservicesQuiz.filter(q => q.quizId === 101)[0];;
    } else {
      this.quizChoice = "Continuous Integration";
      this.myQuiz = this.continuousIntegrationQuiz.filter(q => q.quizId === 102)[0];;
    }
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return 'Error';
  } 

  onSubmit(formData){
    console.log('Begin Form Submission');
    this.quizResults = formData;
    this.quizResults['employeeId'] = this.employeeId;
    this.quizResults['quiz'] = this.quiz;
    
    
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    //console.log(this.quizResults['employeeId']); //show employee ID number, debug only
    console.table(this.quizResults);  //show quiz results

    //Write answers to console
    //console.log(this.quizResults['answerBank']); //show answers, debug only
  
    /*
    * Scoring section
    */
    var scoredResults: any 
    let x = 0;  //instantiate score at 0
    
    //iterate 10 times (1 per question) and count points where user answered correctly
    for(let i = 1; i < 11; i++) {
     
     scoredResults = this.quizResults['answerBank']['question' + i]; 
     var isQuestionCorrect = scoredResults.split(";")[1]; //parse results to determine if answered correctly
     //console.log(scoredResults + ':' + isQuestionCorrect); //view answers Sanity check, comment out after debug

     //Test results and grant 10 points where user answered correctly
      if(isQuestionCorrect === "true") {
        x = (x + 10);
      } else {
        x = (x + 0);
      }
    }

    //console.log('Score: ' + x);  //write user's score to console, debug Only
    this.quizResults['score'] = x;  //write score to object
    const data = {'quizId': this.quizResults['quiz'], 'employeeId': this.quizResults['employeeId'], 'score': this.quizResults['score']};

    const summaryData = {'quizId': this.quizResults['quiz'], 'employeeId': this.quizResults['employeeId'], 'date': moment().format(), 'score': this.quizResults['score']};

    console.table(this.quizResults); //verify quizResults updated in console
    
    //this.displayResults = JSON.stringify(this.quizResults);

    //onsole.log('Results' + this.displayResults);

    console.log(data);

    return this.http.post('/api/results', data, config).subscribe(
      (res) => {
        console.log("POST: " + res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.openDialog();
        this.writeCumScore(summaryData, config);
      }
    );
    

    
      
  }

  //Write to summary collection
  writeCumScore(summaryData, config) {
    console.log('Writing Cumulative Summary Entry');

    return this.http.post('/api/summary', summaryData, config).subscribe(
      (res) => {
        console.log("POST: " + res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        
      }
    );

  }

  //Dialog Code. Must figure out how to pass variable to the modal.
  openDialog() {
    console.log('Dialog Score: ' + this.quizResults['score']);
    const dialogRef = this.dialog.open(QuizSummaryDialogComponent, {
      data: {
        quizScore: this.quizResults['score']
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.router.navigate(['/']);
      }
    })

    dialogRef.componentInstance.quizSummary = this.quizResults;
  }

  ngOnInit() {
  }

}
