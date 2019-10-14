    /*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
import { NgModule } from '@angular/core';
import { CumulativeSummaryComponent } from './components/cumulative-summary/cumulative-summary.component';
import { E404Component } from './components/e404/e404.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from "./shared/auth-guard/auth-guard.service";
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from "./shared";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { QuizComponent } from './components/quiz/quiz.component';

export const routes: Routes = [
  { 
    path: "session", 
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'not-found', component: E404Component }
    ]
  },
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
            component: DashboardComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: "csummary",
            component: CumulativeSummaryComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: "presentation/:id",
            component: PresentationComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: "quiz/:id",
            component: QuizComponent,
            canActivate: [AuthGuardService]
          }
        ]
      },
      { 
        path: "**", redirectTo: "/session/not-found"
      }
      
    ];
  
    //Note: useHash:true param turns the hashing on.  Had trouble with children routes without it
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
