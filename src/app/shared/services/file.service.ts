import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url: string = 'https://localhost:5001/api/file';

  constructor(private http: HttpClient) { }
  fileuploads : FileUpload[]=[];

  public upload(formData: FormData) {
    return this.http.post(`${this.url}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public download(fileUrl: string) {
    return this.http.get(`${this.url}/download?fileUrl=${fileUrl}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }
  // public delete(fileUrl: string){
  //   return this.http.delete(`${this.url}/delete?fileUrl=${fileUrl}`,{

  //   reportProgress: true,
  //   observe: 'events',
  //   responseType: 'blob'

  // })
  // }
  public Index(Name: string) {
    return this.http.get(this.url + `/Index?docsearch=${Name}`, {
      reportProgress: true,
      // observe: 'events',
      // responseType: User

    })
  }

  updateFile(fileupload: FileUpload): Observable<FileUpload> {
    return this.http.put<FileUpload>(this.url + '/' + fileupload.id, fileupload);
  }

  public getSpecFiles(id: number) {
    console.log("test1 " + id);
    return this.http.get(this.url + `/getSpecFiles/${id}`, {
      reportProgress: true,
      // observe: 'events',
      // responseType: User
    })
  }



  // updateFile(formData: FormData):Observable<FormData>{
  //   return this.http.put<FormData>(this.url+'/'+formData.id,formData);
  // }

  // updateFile(id:string){
  //   return this.http.put(`${this.url}/change?Id=${id}`,{
  //     reportProgress: true,
  //   observe: 'events',
  //   responseType: 'blob'
  //   })
  // }


  // public delete2(fileUrl: string, id: string){
  //   return this.http.delete(`${this.url}/delete?fileUrl=${fileUrl}?Id=${id}`,{

  //   reportProgress: true,
  //   observe: 'events',
  //   responseType: 'blob'

  // })
  // }

  public getPhotos() {
    return this.http.get(`${this.url}/getPhotos`);
  }

  deleteUser(id: string) {
    console.log("service");
    console.log(id);

    return this.http.delete(`${ this.url }/Delete?Id=${ id }`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    })
    
  }

  restore(id: string) {
    console.log("service");
    console.log(id);

    return this.http.put(`${this.url}/restore/${id}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    })
  }

  // public getReUsers = () => {
  //   this.http.get('https://localhost:5001/api/fileUpload')
  //   .subscribe({
  //     next: (res) => this.fileuploads = res as FileUpload[],
  //     error: (err: HttpErrorResponse) => console.log(err)
  //   });
  // }

  change(id:string) {
    console.log("service");
    console.log(id);
   
    return this.http.put(`${this.url}/change/${id}`,{
      reportProgress: true,
  observe: 'events',
  responseType: 'blob'
  })
  }
}

