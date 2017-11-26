import { Component, OnInit } from '@angular/core';
import {Question} from "../../models/Question";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Question[];
  constructor(public dataService:DataService) {
  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions()
  }

}
