    /*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CumulativeSummaryComponent } from './components/cumulative-summary/cumulative-summary.component';
import { E404Component } from './components/e404/e404.component';
import { QuizSummaryDialogComponent } from './components/quiz-summary-dialog/quiz-summary-dialog.component';

//shared
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';

//material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from "@angular/material/dialog";
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import { HttpClientModule } from "@angular/common/http";
import { PresentationComponent } from './components/presentation/presentation.component';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CumulativeSummaryComponent,
    E404Component,
    AuthLayoutComponent,
    BaseLayoutComponent,
    PresentationComponent,
    QuizComponent,
    QuizSummaryDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatRadioModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    CommonModule,
    HttpClientModule,
    CarouselModule,
    MatListModule
  
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [QuizSummaryDialogComponent]
})
export class AppModule { }
