import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserAddHttpService {

  constructor(private _http: HttpClient) { }

  public addUser(user: User): Observable<any> {
    const url = 'http://localhost:5000/api/users/add';
    const headers = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
    return this._http.post<User>(url, user, headers);
  }
}
