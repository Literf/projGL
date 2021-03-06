import { Injectable, } from '@angular/core'
import { CanActivate, Router,ActivatedRoute, ActivatedRouteSnapshot,  RouterStateSnapshot  } from '@angular/router';
import { Observable } from "rxjs";
import firebase from "firebase/app";
import "firebase/auth";

import { UsersService } from '../services/users.service';
import { User } from '../models/user';

//import "firebase/firestore";

@Injectable()
export class RoleGuardService implements CanActivate


/*{
    constructor(private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
            
            let  expectedRole : string = next.data.role;
        return new Promise(
            (resolve, reject) => {
                (user) =>{
                    if(user.checkUserRole(expectedRole)==false) {
                        resolve(true);
                    } else {
                        this.router.navigate(['/main-window']);
                        reject(false);
                    }
                
            }
            });
    }
}*/

{
    constructor(private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
            
            let  expectedRole : string = next.data.role;
            let service:UsersService;
        return new Promise(
            (resolve, reject) => 
            {
                firebase.auth().onAuthStateChanged(
                (user) =>{
                    let user2:User = service.getUser(user.email);
                    if(user2.checkUserRole(expectedRole)==true){
                        //.checkUserRole(expectedRole)==false) {
                        resolve(true);
                    } else {
                        this.router.navigate(['/main-window']);
                        reject(false);
                    }
                
                }
                );
            });
    }
}