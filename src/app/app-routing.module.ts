import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizHouseComponent } from './quiz-house/quiz-house.component';

const routes: Routes = [
  { path: '', component:HomeComponent },  
  { path: 'home', component:HomeComponent },  
  { path: 'quiz', component:QuizHouseComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
