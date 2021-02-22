import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";

@Injectable(
)
export class AuthService{
    constructor() {}


    signInUser(email: string, password: string){
        return new Promise<void>(
            (resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(email,password).then(
                    () => {
                        resolve();
                    },
                        (error)=>{
                            reject(error);
                        }
                );
            }
        );
    }

    signOutUser(){
        firebase.auth().signOut();
    }



  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

}

