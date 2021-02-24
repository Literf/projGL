import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {Subject} from 'rxjs';
import firebase from "firebase/app";
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor(private httpClient: HttpClient) { }
  
  users: User[] = [];
  usersSubject = new Subject<User[]>();

  emitUsers() {
    this.usersSubject.next(this.users);
  }

  saveUsers() { 
    // https://www.youtube.com/watch?v=uYhAfgEwNWA&feature=youtu.be
    //2h58 tuto fonction ajout, 3h40 important
  
  this.httpClient.put('https://projgl-c484f-default-rtdb.europe-west1.firebasedatabase.app/users.json',
   this.users)
    .subscribe(
      () => {
        console.log('Enregistrement terminé')
      },
      (error) => {
        console.log('Erreur de sauvegarde' + error)
      }
    )
  }

  createNewUser(newUser: User) {
    this.users.push(newUser);
    this.saveUsers();
    this.emitUsers();
  }

  getUsersFromServer() {
    this.httpClient
    .get<any[]>('https://projgl-c484f-default-rtdb.europe-west1.firebasedatabase.app/users.json')
    .subscribe(
      (response) => {
        this.users = response;
        this.emitUsers();
        console.log('Chargement terminé ! ');
      },
      (error) => {
        console.log('Erreur de chargement ! ' + error);
      }
    )


  }

}
