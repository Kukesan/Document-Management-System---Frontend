import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserinfomationsService } from '../shared/services/userinfomations.service';
import { UserInformations } from '../_interfaces/userdetails.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userinformationService: UserinfomationsService, private router: Router, private formBuilder: FormBuilder) { }
  registerationSuccess:boolean=false;
  // form2: any = {};
  userinformations: UserInformations[] = [];
  userinformation: UserInformations = {
    id: 0,
    empId: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    jobPosition: '',
    telephoneNo: '',
    userAccepted: false,
    userEmail: '',
    groupId:0
  }

  ngOnInit(): void {
  }


  addUser() {
    this.userinformationService.addUser(this.userinformation)
      .subscribe(
        (response: any) => {
          console.log("test1");
          this.registerationSuccess=true;
        //  this.router.navigate(["/dashboard"]);
        }
      )
  }
}