import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
//import "firebase/firestore";
export interface TabItem {
  label: string;
  link: string;
  index: number;
}

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  navLinks: TabItem[];
  activeLinkIndex = -1; 

  isAuth:boolean;

  constructor(private authService: AuthService,private router: Router) { 
    this.navLinks = [
      {
        label: 'Clients',
        link: './clients',
        index:0
      },
      {
        label: 'Section 2',
        link: '',
        index:1
      },
      {
        label: 'Section 3',
        link: '',
        index:2
      },
    ];
  }

  ngOnInit(): void {
    /*firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth = true
        }else{
          this.isAuth = false;
        }
      }
    );*/
    
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });


  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
