import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})



export class AuthComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void{
    this.initForm();
  }

  initForm(){
    this.signInForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }


  onSubmit(){
    const  email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    //console.warn(this.signInForm.get('email'));
    //console.log(this.signInForm.value);
    this.authService.signInUser(email,password).then(
      ()=>{
        this.router.navigate(['/main-window']);
      },
      (error)=>{
        this.errorMessage = error;
      }
    );
  }

}
