import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../services/users.service';

import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import "firebase/auth";
import { Project } from '../models/project';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { AddInfoService } from '../services/add-info.service';
import { ListProjectsComponent} from  '../list-projects/list-projects.component';

import { Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.scss']
})
export class ModifUserComponent implements OnInit {

  signupForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    position: ['', [Validators.required]],
    status_collab: [],
    status_chef: [],
    status_admin: [],
    gender: ['H', ],
    birthdate: ['', ],
    birthplace: ['', ],
    department: ['', ],
    address: ['', ],
    phone: ['', ],
    endDate: ['', ],
  });
  errorMessage: string;
  genders = ['H', 'F',
            'Other'];

  submitted = false;

  user: User;
  projects : Project[];
  projectSubscription: Subscription;
  
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private userService: UsersService,
    //Project service
    private projectService: AddInfoService,
    


    private location: Location )
  {} 

  async ngOnInit(){
    this.userService.getUsersFromServer(); //Fetch user to modify later the list
    
    this.projectService.getListProjectsFromServer(); //avoir la liste des projets
    
    this.projects = this.projectService.listProject;
    /*
    this.projectSubscription = this.projectService.projectSubject.subscribe(
      (listPr: Project[]) => {
        this.projects = listPr;
      }
      

      
    );
    this.projectService.emitProjectsubject();
    */
    try {
      await this.getUser();
      await this.getProject();
      
    } catch (error) {
      console.log(error);
    }
    
    this.initForm();
  }

  initForm() {
    
    this.signupForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      position: [this.user.position, [Validators.required]],
      status_collab: [this.user.collaborator,],
      status_chef: [this.user.manager,],
      status_admin: [this.user.admin,],
      gender: [this.user.gender, ],
      birthdate: [this.user.birthdate, ],
      birthplace: [this.user.birthplace, ],
      department: [this.user.department, ],
      address: [this.user.address, ],
      phone: [this.user.phone, ],
      endDate: [this.user.endDate, ], 
    });
  }

  async getUser() {
    const email = this.route.snapshot.paramMap.get('id');

    const user = await this.userService.getUsers();
    this.user = user.find(el => el != null && el.email===email);
  }
  async getProject() {

    const projects = await this.projectService.getListProjectsFromServer()
  }
  

  goBack(): void {
    this.location.back();
  }

  onSubmit() {

    this.submitted = true;

    this.user.firstName = this.signupForm.get('firstName').value;
    this.user.lastName = this.signupForm.get('lastName').value;
    this.user.position = this.signupForm.get('position').value;

    this.user.collaborator = this.signupForm.get('status_collab').value;
    this.user.manager = this.signupForm.get('status_chef').value;
    this.user.admin = this.signupForm.get('status_admin').value;
    this.user.birthdate = this.signupForm.get('birthdate').value;
    this.user.birthplace = this.signupForm.get('birthplace').value;
    this.user.gender = this.signupForm.get('gender').value;
    this.user.department = this.signupForm.get('department').value;
    this.user.address = this.signupForm.get('address').value;
    this.user.phone = this.signupForm.get('phone').value;
    this.user.endDate = this.signupForm.get('endDate').value;

    this.userService.modifyUser(this.user); // Modifying the user service firebase

  }

  delete(){
    
    this.projects.forEach(p => {
      if (p.projectManager!==this.user.email){
        console.log("ici");
        this.goBack();
        return;
      }
      else{
      p.listTask.forEach(t =>{
        if (t.collab!==this.user.email){
          this.goBack();
          console.log("ici");   
          return; 

        }

      })
    }
    });  
    this.userService.delete(this.user.email);
    this.goBack();
    return; 
    }
  }
    



