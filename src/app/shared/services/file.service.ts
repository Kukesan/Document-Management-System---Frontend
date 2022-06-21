import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url: string = 'https://localhost:5001/api/file';

  constructor(private http: HttpClient) { }

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
  public delete(fileUrl: string){
    return this.http.delete(`${this.url}/delete?fileUrl=${fileUrl}`,{
    
    reportProgress: true,
    observe: 'events',
    responseType: 'blob'
    
  })
  }
  public Index(Name: string){
    return this.http.get(this.url+`/Index?docsearch=${Name}`,{
    reportProgress: true,
    // observe: 'events',
    // responseType: User
    
  })
  }
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
}
