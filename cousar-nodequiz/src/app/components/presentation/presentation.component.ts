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
  title = 'Primeng Carousel Example';
  presentations: any;

  constructor() { 
    this.presentations = [
      {name: 'OAuth Slide 1', image: 'Slide1.jpg'},
      {name: 'OAuth Slide 2', image: 'Slide2.jpg'},
      {name: 'OAuth Slide 3', image: 'Slide3.jpg'},
      {name: 'OAuth Slide 4', image: 'Slide4.jpg'},
      {name: 'OAuth Slide 5', image: 'Slide5.jpg'},
      {name: 'OAuth Slide 6', image: 'Slide6.jpg'},
      {name: 'OAuth Slide 7', image: 'Slide7.jpg'},
      {name: 'OAuth Slide 8', image: 'Slide8.jpg'},
      {name: 'OAuth Slide 9', image: 'Slide9.jpg'},
      {name: 'OAuth Slide 10', image: 'Slide10.jpg'},
      {name: 'OAuth Slide 11', image: 'Slide11.jpg'},
      {name: 'OAuth Slide 12', image: 'Slide12.jpg'},
      {name: 'OAuth Slide 13', image: 'Slide13.jpg'}
    ];
  }

  ngOnInit() {
  }

}
