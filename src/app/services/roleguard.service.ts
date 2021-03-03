import { Injectable, } from '@angular/core'
import { CanActivate, Router,ActivatedRoute, ActivatedRouteSnapshot,  RouterStateSnapshot  } from '@angular/router';
import { Observable } from "rxjs";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthService } from "./auth.service";
//import "firebase/firestore";

@Injectable()
export class RoleGuardService implements CanActivate{
    constructor(private router: Router,private authService: AuthService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            let url: string = state.url;
            const expectedRole = next.data.role;
        return new Promise(
            (resolve, reject) => {
                (user) =>{
                    if(user.checkUserRole(expectedRole)==true) {
                        resolve(true);
                    } else {
                        this.router.navigate(['/main-window']);
                        reject(false);
                    }
                
            }
            });
    }
}