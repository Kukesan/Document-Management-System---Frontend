import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileService } from 'src/app/shared/services/file.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';
import { UserToCreate } from 'src/app/_interfaces/userToCreate.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isCreate: boolean;
  name: string;
  address: string;
  user: UserToCreate;
  status:boolean=true;
  createdDate:string;
  
  fileUploads: FileUpload[] = [];
  response: {dbPath: ''};
  photos: string[] = [];
  hero: any;
  heroForm: FormGroup;
  fileUrl:string;
  enteredSearchValue:string='';
  element:boolean=false;
  userdata : FileUpload;

  constructor(private http: HttpClient, private fileService: FileService){}

  ngOnInit(): void {
    
  }
  search = () => {
    console.log('test1');
    this.fileService.Index(this.name).subscribe((event : FileUpload) => {
     this.userdata = event;
     this.element=true;
     
  });
}


}
