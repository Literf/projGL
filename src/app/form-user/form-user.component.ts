import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  public taskName:string;
  public startDate:Date;
  public endDate:Date;
  public collaboRes:string;
  public Cestimee:number;
  public tacheMere:string;
  public dependencylist:string[];
  public description:string;

  AddTask(){
    //task:Task = new Task(1, taskName, )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
