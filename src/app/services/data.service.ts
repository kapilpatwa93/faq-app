import { Injectable } from '@angular/core';
import { Question } from "../models/Question";

@Injectable()
export class DataService {
  questions:Question[];
  constructor() {
    this.questions = [
      {
        text : "What is your name?",
        answer : "My name is Kapil",
        hide : true
      },
      {
        text : "What is your favorite color?",
        answer : "My name is Blue",
        hide : true
      },
      {
        text : "What is your favorite lang?",
        answer : "My name is Javascript",
        hide : true
      }
    ]
  }

  getQuestions(){
    return this.questions;
  }

}
