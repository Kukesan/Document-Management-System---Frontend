import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folder } from 'src/app/_interfaces/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  baseUrl = "https://localhost:5001/api/Folders" 
  constructor(private http:HttpClient) { }

  // baseUrl = "https://localhost:5001/api/Folders"

  // getAllFolders():Observable<Folder[]>{
  //   return this.http.get<Folder[]>(this.baseUrl);
  // }
  // addFolder(folder:Folder):Observable<Folder>{
   // parseInt(folder.folderId);
  //   return this.http.post<Folder>(this.baseUrl,folder);
  // }
  // getAdminFolder():Observable<Folder[]>{
  //   return this.http.get<Folder[]>(this.baseUrl+'/'+'AdminGetIssuesDetails');
  // }

  // deleteFolder(id:string):Observable<Folder>{
  //   return this.http.delete<Folder>(this.baseUrl+'/'+id);
  // }

  // updateFolder(folder:Folder):Observable<Folder>{
  //   return this.http.put<Folder>(this.baseUrl+'/'+folder.folderId,folder);
  // }

  

  getAllFolders():Observable<Folder[]>{
    return this.http.get<Folder[]>(this.baseUrl+'/GetFolder'); 
  } 

  getAllFoldersAdmin():Observable<Folder[]>{
    return this.http.get<Folder[]>(this.baseUrl+'/AdminGetFolder'); 
  } 

  addFolder(folder:Folder):Observable<Folder>{
    parseInt(folder.name);
    return this.http.post<Folder>(this.baseUrl,folder); 
  } 

  deleteFolder(folderId:number):Observable<Folder>{
    return this.http.delete<Folder>(this.baseUrl+'/'+folderId);
  }

  updateFolder(folder:Folder):Observable<Folder>{
    return this.http.put<Folder>(this.baseUrl+'/'+folder.folderId,folder);
  }
  // addFiles(folderId:number):Observable<Folder>{
  //   return this.http.post<Folder>(this.baseUrl+folderId);
  // }
} 

