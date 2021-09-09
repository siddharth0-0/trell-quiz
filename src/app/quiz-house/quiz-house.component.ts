import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizHouseService } from './quiz-house.service';

@Component({
  selector: 'app-quiz-house',
  templateUrl: './quiz-house.component.html',
  styleUrls: ['./quiz-house.component.scss']
})
export class QuizHouseComponent implements OnInit {

  public resData:any;

  public questions;
  public correctAns : boolean;
  public choice;
  public points = 0;
  showSub = false;
  showHome =false;


  constructor(private quizService: QuizHouseService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.quizService.getData().subscribe(
      res => {
        this.resData = res;
        console.log('data',this.resData);
      },
    );
    localStorage.getItem
  }

  onStart(){
    this.questions = this.resData.results.map(el => ({...el,selected_ans: false}));

    console.log('sta',this.questions);
    this.showSub = true;
  }

  onSub(){
    let score =0;
    this.questions.forEach(element => {
      if(element.correct_answer === element.selected_ans){
        score+=1;
      }
    });
    console.log('quest',this.questions,score);
    this.showHome = true;
    
    let local = localStorage.getItem('history')
    if(local){
      let fetchedArray = JSON.parse(local);
      fetchedArray.push(score);
      localStorage.setItem('history',JSON.stringify(fetchedArray));
    }
  }

  onHome(){
    this.router.navigateByUrl('home');
  }
}
