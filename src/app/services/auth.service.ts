import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";

@Injectable(
)
export class AuthService{
    constructor() {}


    signInUser(email: string, password: string){
        //email="mawa_1013@hotmail.fr";
        //password="123456AAzz";
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

}