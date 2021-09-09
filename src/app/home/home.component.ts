import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public score;
  constructor(private router:Router) { }

  ngOnInit(): void {
    let local = localStorage.getItem('history')
    if(!local){
      localStorage.setItem('history',JSON.stringify([]))
    }
    else{
      this.score = JSON.stringify(local);
    }
  }

  onStartQuiz(){
    console.log('test');
    this.router.navigateByUrl('quiz');
  }

}
