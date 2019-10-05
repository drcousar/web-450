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
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  title = 'Training Presentation';
  
  presentation: number;
  presentationChoice: string;
  presentationImages = [
    {name: 'Slide 1', image: 'Slide1.jpg'},
    {name: 'Slide 2', image: 'Slide2.jpg'},
    {name: 'Slide 3', image: 'Slide3.jpg'},
    {name: 'Slide 4', image: 'Slide4.jpg'},
    {name: 'Slide 5', image: 'Slide5.jpg'},
    {name: 'Slide 6', image: 'Slide6.jpg'},
    {name: 'Slide 7', image: 'Slide7.jpg'},
    {name: 'Slide 8', image: 'Slide8.jpg'},
    {name: 'Slide 9', image: 'Slide9.jpg'},
    {name: 'Slide 10', image: 'Slide10.jpg'},
    {name: 'Slide 11', image: 'Slide11.jpg'},
    {name: 'Slide 12', image: 'Slide12.jpg'},
    {name: 'Slide 13', image: 'Slide13.jpg'}
  ];
  quizLink: string;

  constructor(private route: ActivatedRoute) { 
    //pull id from URL
    this.presentation = parseInt(this.route.snapshot.paramMap.get("id"), 10);
    
    //debug:  display selected page 
    console.log("Debug - Presentation id from URL: " + this.presentation);
 
    //need to come up with some logic to make this dynamic, maybe loop thru db
    if (this.presentation === 1) {
      this.presentationChoice = "OAuth";
      this.quizLink = "/quiz/1";
    } else if (this.presentation === 2) {
      this.presentationChoice = "Microservices";
      this.quizLink = "/quiz/2";
    } else {
      this.presentationChoice = "ContinuousIntegration";
      this.quizLink = "/quiz/3";
    }
    
  }

  
  ngOnInit() {
  }

}
