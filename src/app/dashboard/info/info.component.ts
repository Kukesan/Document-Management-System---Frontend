import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordConfirmationValidatorService } from 'src/app/shared/custom-validators/password-confirmation-validator.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserinfoService } from 'src/app/shared/services/userinfo.service';
import { UserInformation } from 'src/app/_interfaces/userinfo.model';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  registerForm1: FormGroup;
  errorMessage: string = '';
  showError: boolean;

  constructor(private userinfoService : UserinfoService) { }

  userInfoes : UserInformation[] = [];

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(){
    this.userinfoService.getUser()
    .subscribe(
      response =>{
        console.log(response);
        this.userInfoes=response;
        console.log(response);
      }
    )
  }
}
