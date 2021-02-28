import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AddInfoService} from '../services/add-info.service'

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  
  closeResult = '';
  public projetActuel:Project;
  @Input() public listProjects:Project[];

  public projectName:string = "";
  public ChefName:string = "";
  //public ClientName:string="";
  public StartDate:Date;
  public EndDate:Date;
  public Description:string = "";

  constructor(public service:AddInfoService ,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAndGetProject(projet,content){
    this.projetActuel = projet;
    this.projectName = this.projetActuel.name.toLowerCase();
    this.StartDate = this.projetActuel.startDate;
    this.EndDate = this.projetActuel.estimatedEndDate;
    //this.ClientName= this.projetActuel.client.name.toLowerCase();
    this.Description= this.projetActuel.description;
    this.ChefName = this.projetActuel.projectManager.firstName.toLowerCase() + " " +this.projetActuel.projectManager.lastName.toLowerCase();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`; 
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveChanges(){
    this.projetActuel.name = this.projectName.toLowerCase();
    this.projetActuel.startDate = this.StartDate;
    this.projetActuel.estimatedEndDate = this.EndDate;
    //this.projetActuel.client.name = this.ClientName.toLowerCase();
    this.projetActuel.description = this.Description;
    this.projetActuel.projectManager.firstName = this.ChefName.split(" ")[0].toLowerCase();
    this.projetActuel.projectManager.lastName = this.ChefName.split(" ")[1].toLowerCase();
    this.service.saveProjects();
  }

}
