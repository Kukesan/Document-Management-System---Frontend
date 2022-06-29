import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseDto } from './../../_interfaces/response/authResponseDto.model';
import { UserForAuthenticationDto } from './../../_interfaces/user/userForAuthenticationDto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UseractivityService } from 'src/app/shared/services/useractivity.service';
import { UserActivity } from 'src/app/_interfaces/useractivity.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  loginForm: FormGroup;
  errorMessage: string = '';
  showError: boolean;

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute, private useractivityService: UseractivityService, public datepipe: DatePipe) { }

  useractivitys: UserActivity[] = []
  useractivity: UserActivity = {
    id: 0,
    userEmail: '',
    loginTime: '',
    logoutTime: ''
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      useremail: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName).hasError(errorName)
  }

  loginUser = (loginFormValue) => {
    this.showError = false;
    const login = { ...loginFormValue };

    const userForAuth: UserForAuthenticationDto = {
      email: login.useremail,
      password: login.password
    }

    this.authService.loginUser('api/accounts/login', userForAuth)
      .subscribe({
        next: (res: AuthResponseDto) => {
          localStorage.setItem("token", res.token);
          this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
          // this.addUserActivity();
          this.useractivity.loginTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
          this.useractivity.userEmail=userForAuth.email;
          this.useractivityService.addActivity(this.useractivity)
            .subscribe(
              (response: any) => {
                //console.log();
              }
            )
          this.router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = "User Email or Password Incorrect Try Again or Please Contact Admin";
          this.showError = true;

        }
      })
  }
  // addUserActivity() {

  // }
}
