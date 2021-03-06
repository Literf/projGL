import { Injectable } from '@angular/core'
import { CanActivate, Router,ActivatedRoute, ActivatedRouteSnapshot,  RouterStateSnapshot   } from '@angular/router';
import { Observable } from "rxjs";
import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Injectable()
export class AuthGuardService implements CanActivate

{
    constructor(private router: Router) {}
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().onAuthStateChanged(
                    (user) =>{
                        if(user) {
                            resolve(true);
                        } else {
                            this.router.navigate(['/auth']);
                        }
                    }
                );
            }
        );
    }
}
