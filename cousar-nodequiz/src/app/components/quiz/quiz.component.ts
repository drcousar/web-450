    /*
============================================
; Title: NodeQuiz
; Author: Don Couasr
; Date: 03 October 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title = 'Take Quiz';
  quiz: number;
  quizChoice: string;
  myQuiz: any;

  oauthQuiz: any = [
    {
      quizId: 100,
      questions: [
        {
          id: 1,
          text: 'What is the best answer to define OAuth?',
          answers: [
            {
            id: 200,
            text: 'An authorization framework that enables 3rd party applications to obtain limited access to a web service',
            isCorrect: false
            },
            {
              id: 201,
              text: 'A simple way to publish and interact with protected data',
              isCorrect: false
            },
            {
              id: 202,
              text: 'A more safe and secure way to give you access to data',
              isCorrect: false
            },
            {
              id: 203,
              text: 'All of the above',
              isCorrect: true
            }
          ]
        },
        {
          id: 2,
          text: 'Which of the following is OAuth not used to protect?',
          answers: [
            {
            id: 204,
            text: 'Web Applications',
            isCorrect: false
            },
            {
              id: 205,
              text: 'Desktop Applications',
              isCorrect: false
            },
            {
              id: 206,
              text: 'Mobile Applications',
              isCorrect: false
            },
            {
              id: 207,
              text: 'Personal Computer BIOS',
              isCorrect: true
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
          text: 'A microservice is an architecture that structures an application as ___________.',
          answers: [
            {
            id: 200,
            text: 'A collection of services',
            isCorrect: true
            },
            {
              id: 201,
              text: 'A way to safe way to secure an application',
              isCorrect: false
            },
            {
              id: 202,
              text: 'A load balanced method of interacting with HTTP',
              isCorrect: false
            },
            {
              id: 203,
              text: 'A cloud based solution',
              isCorrect: false
            }
          ]
        },
        {
          id: 2,
          text: 'Which of the following is NOT a characteristic of microservices?',
          answers: [
            {
            id: 204,
            text: 'Highly maintainable',
            isCorrect: false
            },
            {
              id: 205,
              text: 'Loosely coupled',
              isCorrect: false
            },
            {
              id: 206,
              text: 'Restricted to one language per solution',
              isCorrect: true
            },
            {
              id: 207,
              text: 'Organized around business capabilities',
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
            id: 200,
            text: 'The practice of integrating changes from different developers in the team into a mainline as early as possible.',
            isCorrect: true
            },
            {
              id: 201,
              text: 'The practice of integrating changes from different developers in the team into a mainline as close to the due date as possible.',
              isCorrect: false
            },
            {
              id: 202,
              text: 'Software designed to integrate changes without an administrator’s input.',
              isCorrect: false
            },
            {
              id: 203,
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
            id: 204,
            text: 'Jenkins',
            isCorrect: false
            },
            {
              id: 205,
              text: 'Bamboo',
              isCorrect: false
            },
            {
              id: 206,
              text: 'CI/CD',
              isCorrect: true
            },
            {
              id: 207,
              text: 'Semaphoreg',
              isCorrect: false
            }
          ]
        }
      ]
    }
  ];
  
  constructor(private route: ActivatedRoute) { 
    this.quiz = parseInt(this.route.snapshot.paramMap.get("id"), 10);

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

    //debug:  display selected page 
    //console.log("Debug - quiz object: " + this.myQuiz.questions[1]);

  }

  ngOnInit() {
  }

}
