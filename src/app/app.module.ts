import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ProjectComponent } from './project/project.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskComponent } from './task/task.component';
import { FormProjectComponent } from './form-project/form-project.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { FormUserComponent } from './form-user/form-user.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { FormClientComponent } from './form-client/form-client.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import "firebase/auth";
import "firebase/firestore";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListProjectsComponent,
    ProjectComponent,
    ListTasksComponent,
    TaskComponent,
    FormProjectComponent,
    FormTaskComponent,
    FormUserComponent,
    MainWindowComponent,
    ListClientsComponent,
    ClientComponent,
    DashboardComponent,
    ProjectBoardComponent,
    FormClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
