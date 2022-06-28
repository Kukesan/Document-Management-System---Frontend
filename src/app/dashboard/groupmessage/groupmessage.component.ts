import { Component, OnInit } from '@angular/core';
import { GroupmessageService } from 'src/app/shared/services/groupmessage.service';
import { GroupMessage } from 'src/app/_interfaces/groupmessage.model';

@Component({
  selector: 'app-groupmessage',
  templateUrl: './groupmessage.component.html',
  styleUrls: ['./groupmessage.component.css']
})
export class GroupmessageComponent implements OnInit {

  constructor(private groupService : GroupmessageService) { }

  groupmessages : GroupMessage[] = [];

  ngOnInit(): void {
    this.getAllGroupMessages();
  }
  
  getAllGroupMessages(){
    this.groupService.getAllGroupMessages()
    .subscribe(
      response =>{
        this.groupmessages=response;
      }
    )
  }

}
