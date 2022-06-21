import { Router } from '@angular/router';
import { PasswordConfirmationValidatorService } from './../../shared/custom-validators/password-confirmation-validator.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';
  showError: boolean;

  constructor(private authService: AuthenticationService, 
    private passConfValidator: PasswordConfirmationValidatorService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userId: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      jobPosition: new FormControl(''),
      telephoneNo: new FormControl(''),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    this.registerForm.get('confirm').setValidators([Validators.required, 
    this.passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName).hasError(errorName)
  }

  public registerUser = (registerFormValue) => {
    this.showError = false;
    const formValues = { ...registerFormValue };

    const user: UserForRegistrationDto = {
      //userId: formValues.userId,
      email: formValues.email,
      // fullName: formValues.fullName,
      // address: formValues.address,
      // city: formValues.city,
      // jobPosition: formValues.jobPosition,
      // telephoneNo: formValues.telephoneNo,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };

    this.authService.registerUser("api/accounts/registration", user)
    .subscribe({
      next: (_) => this.router.navigate(["/authentication/login"]),
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      }
    })
  }
  // getUser(){
  //   this.authService.getUser()
  //   .subscribe(
  //     response =>{
  //       this.user=response;
  //       console.log(this.issues)
  //     }
  //   )
  // }
}
