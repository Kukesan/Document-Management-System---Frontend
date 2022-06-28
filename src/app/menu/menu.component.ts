import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';
import { UserActivity } from '../_interfaces/useractivity.model';
import { UseractivityService } from '../shared/services/useractivity.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;
  isUserAuthenticated: boolean;

  constructor(private authService: AuthenticationService, private router: Router, private useractivityService: UseractivityService, public datepipe: DatePipe) {
    this.authService.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;
      })
  }

  useractivitys: UserActivity[] = []
  useractivity: UserActivity = {
    id: 0,
    userEmail: '',
    loginTime: '',
    logoutTime: ''
  }

  ngOnInit(): void {
    this.authService.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;

      })
  }

  public logout = () => {

    this.getAllActivities();
    this.authService.logout();
    this.router.navigate(["/login"]);
  }


  // updateActivity(useractivity: UserActivity) {
  //   console.log("****" + this.useractivitys);
  //   this.useractivity.id = this.getAllActivities();
  //   console.log(this.useractivity.id);
  //   this.useractivity.logoutTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  //   this.useractivityService.updateActivity(useractivity)
  //     .subscribe(
  //       response => {
  //       }
  //     )
  // }

  getAllActivities() {
    this.useractivityService.getAllActivities()
      .subscribe(
        response => {
          this.useractivity.id = response;

          // this.useractivity.id=this.useractivity.id-1;
          console.log("**" + this.useractivity.id);
          //this.useractivity.id=this.useractivity.id
          this.useractivity.logoutTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
          this.useractivityService.updateActivity(this.useractivity)
            .subscribe(
              response => {
              }
            )
        }
      )
  }
}
