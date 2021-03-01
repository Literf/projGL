import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAvancementComponent } from './form-avancement/form-avancement.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DashboardService } from './services/dashboard.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortDirective } from './directive/sort.directive';



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
    FormClientComponent,
    FormAvancementComponent,
    TestComponent,
    SortDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FilterPipeModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule
    
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
