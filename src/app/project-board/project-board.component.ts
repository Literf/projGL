import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { AddInfoService } from '../services/add-info.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {

  public projectName:string = "";
  public ChefName:string = "";
  //public ClientName:string="";
  public StartDate:Date;
  public EndDate:Date;
  public Description:string = "";

  closeResult = '';
  projectsSubscription: Subscription;
  public projectsChefProjet: Project[];
  public projectsCollabo: Project[];
  constructor(public ProjectsService: AddInfoService, private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.projectsSubscription = this.ProjectsService.projectSubject.subscribe(
      (listpr: Project[]) => {
        this.projectsChefProjet = listpr;
        this.projectsCollabo= listpr;
      }
    );
    this.ProjectsService.emitProjectsubject();
  }
  onViewProject(id: number) {
    this.router.navigate(['/info', id]);
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  projet:Project;
  collab:User;
  AddProject(){
    this.collab =new User(1, "haithem", "dahimi", "dahimihaithem@gmail.com", "employee", ["employee"], new Date(), new Date(),"", "", "", "","",new Date() );
    this.projet = new Project(1, this.projectName, this.collab, this.Description, "started", this.StartDate, this.EndDate, new Date(), null, null, [])
    this.ProjectsService.AddProjectToServer(this.projet);
  }


}
