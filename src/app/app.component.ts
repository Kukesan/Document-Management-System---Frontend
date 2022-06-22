import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularClient';
  isUserAuthenticated: boolean;

  constructor(private authService: AuthenticationService,private router: Router){}
  
  ngOnInit(): void {
    if(this.authService.isUserAuthenticated())
      this.authService.sendAuthStateChangeNotification(true);
  }
  gologin(){
    this.router.navigate(["/authentication/login"]);
  }
}
