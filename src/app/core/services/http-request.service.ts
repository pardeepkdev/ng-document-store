import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
const cacheBuster$ = new Subject<void>();

@Injectable({
  providedIn : 'root'
})
export class HttpRequestService {
  private base_url = '';
  
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    withCredentials: true,
  };

 
  
  getRequest(url: string, param = {}) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true,
      params: param,
    };
    
    return this.http.get(`${this.base_url}` + url, httpOptions);
  }


  postRequest(url: string, request_data: any) {
    // console.log(request_data);
    return this.http.post(
      `${this.base_url}` + url,
      request_data,
      this.httpOptions
    );
  }
 
  uploadFiles(url: string, formData: any) {
    return this.http.post(`${this.base_url}` + url, formData);
  }

}
