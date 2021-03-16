import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { LoginClient } from '../model/login-client.model';*/

@Injectable({
  providedIn: 'root'
})
export class LoginClientService {
  url: string; 
  constructor(private http: HttpClient) {
  this.url = 'http://syntra.terugsamen.be/theblackwindows/public/api/clients';
  }
}
