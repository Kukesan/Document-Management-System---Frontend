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
    this.getAllUsers();
  }
  
  getAllUsers(){
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

  approveUser(userinformation : UserInformations){
    userinformation.userAccepted=true;
    this.userinformationService.approveUser(userinformation)
    .subscribe(
      response =>{
        console.log( userinformation.userAccepted);
        this.getAllUsers();
      }
    )
  }

}
