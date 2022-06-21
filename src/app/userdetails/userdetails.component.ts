import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserinfomationsService } from '../shared/services/userinfomations.service';
import { UserInformations } from '../_interfaces/userdetails.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userinformationService :UserinfomationsService,private router: Router) { }

  form: any = {};
  userinformations : UserInformations[] = [];
  userinformation : UserInformations={
    id:0,
    empId: '',
    firstName: '',
    lastName:'',
    address: '',
    city: '',
    jobPosition: '',
    telephoneNo: ''
  }

  ngOnInit(): void {
  }
  addUser(){
      this.userinformationService.addUser(this.userinformation)
      .subscribe(
        (response: any)=>{
          this.router.navigate(["/dashboard"]);
        }
      )
  }
}
