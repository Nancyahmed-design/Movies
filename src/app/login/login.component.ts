import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  error:string = '';
  LoginForm:FormGroup = new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),

  })

   submitLogin(formInfo:FormGroup){
     console.log(formInfo.value);
     this._AuthService.login(formInfo.value).subscribe((response)=>{
        console.log(response);
        if(response.message == 'success')
        {
          ///wadih li login
          localStorage.setItem('userToken',JSON.stringify(response.token));
          this._AuthService.setUserData();
          this._Router.navigate(['/home']);

        }
        else {
           this.error ='Email or password wrong';
        }
     });
   }

  ngOnInit(): void {
  }

}

