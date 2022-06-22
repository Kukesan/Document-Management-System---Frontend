import { Component, OnInit } from '@angular/core';
import { UserinfomationsService } from '../shared/services/userinfomations.service';
import { UserInformations } from '../_interfaces/userdetails.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private userinformationService :UserinfomationsService) { }

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
    telephoneNo: '',
    userAccepted: false,
    userEmail:''
  }
 
  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(){
    this.userinformationService.getUser()
    .subscribe(
      response =>{
        this.userinformations=response;
      }
    )
  }
  // approveUser(){
  //   this.userinformationService.approveUser(userinformation.userAccepted)
  //   .subscribe(
  //     response=>{

  //     }
  //   )
  // }

  approveUser(userinformation : UserInformations){
    userinformation.userAccepted=true;
    this.userinformationService.approveUser(userinformation)
    .subscribe(
      response =>{
        console.log( userinformation.userAccepted);
        this.getUser();
      }
    )
  }

}
