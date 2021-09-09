import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizHouseService {

  configUrl = 'https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=boolean';

  constructor(private http: HttpClient) { 
    this.getData();
  }


  getData(){
    return this.http.get(this.configUrl)
  }
  

  // getById(url,id): Observable<any>{
  //   return this.http.get(url+id)
  //   .pipe((response) => {
  //     return response;
  //   });
  // }
}
