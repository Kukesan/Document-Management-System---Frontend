import { Component, OnInit } from '@angular/core';
import { UserinfomationsService } from 'src/app/shared/services/userinfomations.service';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
  
}
