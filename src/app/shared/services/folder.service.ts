import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folder } from 'src/app/_interfaces/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:5001/api/Folders"

  getAllFolders():Observable<Folder[]>{
    return this.http.get<Folder[]>(this.baseUrl);
  }
  addFolder(folder:Folder):Observable<Folder>{
   // parseInt(folder.folderId);
    return this.http.post<Folder>(this.baseUrl,folder);
  }
  // getAdminFolder():Observable<Folder[]>{
  //   return this.http.get<Folder[]>(this.baseUrl+'/'+'AdminGetIssuesDetails');
  // }

  deleteFolder(id:string):Observable<Folder>{
    return this.http.delete<Folder>(this.baseUrl+'/'+id);
  }

  updateFolder(folder:Folder):Observable<Folder>{
    return this.http.put<Folder>(this.baseUrl+'/'+folder.folderId,folder);
  }
}
