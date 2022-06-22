import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/shared/services/user-api.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  userList$!:Observable<any[]>;

  constructor(private service: UserApiService) { }

  ngOnInit(): void {
    this.userList$ = this.service.getUserList();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddUserComponent:boolean = false;
  activateEditUserComponent:boolean = false;
  user:any;

  modalAdd() {
    this.user = {
      id:0,
      EmpId:null,
      firstName:null,
      lastName:null,
      address:null,
      city:null,
      jobPosition:null,
      telephoneNo:null,
      userEmail:null
    }
    this.modalTitle = "Add User";
    this.activateAddUserComponent = true;
  }

  modalEdit(item:any) {
    console.log("test2");
    this.user = item;
    this.modalTitle = "Edit User";
    this.activateEditUserComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete User ${item.id}`)) {
      this.service.deleteUser(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.userList$ = this.service.getUserList();
      })
    }
  }

  modalClose() {
    this.activateAddUserComponent = false;
    this.activateEditUserComponent = false;
    this.userList$ = this.service.getUserList();
  }

}
