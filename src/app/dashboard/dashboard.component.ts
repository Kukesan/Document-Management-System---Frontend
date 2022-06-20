import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isUserAuthenticated: boolean;
  claims: [] = [];
  isAdmin: boolean;

  constructor(private authService: AuthenticationService,private repository: RepositoryService) { 
  this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
   }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    this.getClaims();
  }
 
  private getClaims = () =>{
    this.repository.getClaims('api/companies/privacy')
    .subscribe(res => {
      this.claims = res as [];
      // this.isAdmin=true;
      // this.isUserAuthenticated=false;
    })
  }
}
