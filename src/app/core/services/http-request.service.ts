import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { AuthApiResponse } from "src/app/utils/typings/User";
const cacheBuster$ = new Subject<void>();

@Injectable({
  providedIn : 'root'
})
export class HttpRequestService {
  
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  postRequest(url: string, request_data: any) {
    return this.http.post<AuthApiResponse>(
      url,
      request_data,
      this.httpOptions
    );
  }
  
}
