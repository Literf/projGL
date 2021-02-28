import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { AddInfoService } from '../services/add-info.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {

  @Input() currentProject:Project;
  public tasksList:Task[];
  TasksSubscription: Subscription;
  constructor(public ProjectsService: AddInfoService, private router: Router) { }

  public taskName:string;
  public startDate:Date;
  public endDate:Date;
  public collaboRes:string;
  public Cestimee:number;
  public tacheMere:string;
  public dependencylist:string[];
  public description:string;
  public task:Task;

  ngOnInit(): void {
    this.TasksSubscription = this.ProjectsService.projectSubject.subscribe(
      (listTasks: Project[]) => {
        this.tasksList = listTasks;
      }
    );
    this.ProjectsService.emitProjectsubject();
  }

  onViewTask(id: number) {
    this.router.navigate(['/listTask', id]);
  }

  AddTask(){
    //this.task=new Task(1,this.taskName, null, this.startDate, this.startDate, this.endDate, this.endDate, this.description, this.Cestimee,2,2,2,[],[],[]);
    console.log(this.currentProject);
    this.ProjectsService.AddTaskToProject(this.task);
  }

}