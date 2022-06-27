import { Component, OnInit } from '@angular/core';
import { UserinfomationsService } from 'src/app/shared/services/userinfomations.service';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Component({
  selector: 'app-define-user',
  templateUrl: './define-user.component.html',
  styleUrls: ['./define-user.component.css']
})
export class DefineUserComponent implements OnInit {

  constructor(private userinformationService :UserinfomationsService) { }

  
  form: any = {};
  approvebutton :string='Hello';
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
    userEmail:'',
    groupId:0
  }
  
  ngOnInit(): void {
    this.getAllUsers();
    //this.checkApprove(this.userinformation);
  }
  
  
  
  private getAllUsers(){
    this.userinformationService.getAllUsers()
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

  // checkApprove(userinformation : UserInformations){
  //   if(userinformation.userAccepted==false){
  //     this.approvebutton='Cancel'
  //   }else{
  //     this.approvebutton='Accept'
  //   }
  // }

  approveUser(userinformation : UserInformations){
    if(userinformation.userAccepted==false){
      userinformation.userAccepted=true;
      this.approvebutton='Cancel'
    }else{
      userinformation.userAccepted=false;
      this.approvebutton='Accept'
    }
    this.userinformationService.approveUser(userinformation)
    .subscribe(
      response =>{
        console.log( userinformation.userAccepted);
        this.getAllUsers();
      }
    )
  }
}
