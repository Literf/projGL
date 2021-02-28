import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../models/task';
import { User } from '../models/user';
import { Project } from '../models/project';
import { Subject } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class AddInfoService {

  constructor(private httpClient:HttpClient) { 
    this.getListProjectsFromServer();
    //this.getListTasksFromServer(id);
  }
  projectSubject = new Subject<Project[]>();

  public tasks:Task[] = [];
  public tasks1:Task[] = [];
  public tasks2:Task[] = [];
  collab =new User(1, "haithem", "dahimi", "dahimihaithem@gmail.com", "employee", ["employee"], new Date(), new Date(),"", "", "", "","",new Date() );
  task = new Task(1, "him", this.collab, new Date(), new Date(), new Date(), new Date(), "dqsjdskq", 10, 0,10,0 , this.tasks,this.tasks1, this.tasks2 );
  project = new Project(1, "building", this.collab, "this is builiding project", "termine", new Date(), new Date(), new Date(), null, null, [this.task]);
  public listProject:Project[]= [];
  
  saveProjects(){
    firebase.database().ref('/projects').set(this.listProject);
  }

  getListProjectsFromServer(){
    firebase.database().ref('/projects')
          .on('value', (data: DataSnapshot) => {
              this.listProject = data.val() ? data.val() : [];
              this.emitProjectsubject();
            }
          );
  }

  emitProjectsubject()
  {
    this.projectSubject.next(this.listProject);
  }

  AddProjectToServer(project:Project) {
    this.listProject.push(project);
    this.saveProjects();
    this.emitProjectsubject();
  }

  listTasks:Task[];

  getListTasksFromServer(id:number){
    firebase.database().ref('/projects/'+id +'/listTask')
          .on('value', (data: DataSnapshot) => {
              this.listTasks = data.val() ? data.val() : [];
              this.emitProjectsubject();
            }
          );
  }

  AddTaskToProject(task: Task, projet:Project){
    //projet.listTask.push(task);
    console.log(projet);
    this.saveProjects();
    this.emitProjectsubject();
  }
}
