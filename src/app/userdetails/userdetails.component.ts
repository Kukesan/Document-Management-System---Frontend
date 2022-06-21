import { Component, OnInit } from '@angular/core';
import { UserinfomationsService } from '../shared/services/userinfomations.service';
import { UserInformations } from '../_interfaces/userdetails.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userinformationService :UserinfomationsService) { }

  form: any = {};
  userinformations : UserInformations[] = [];
  userinformation : UserInformations={
    id:'',
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
      console.log("100");
      this.userinformationService.addUser(this.userinformation)
      .subscribe(
        (response: any)=>{
        }
      )
  }
}
