import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTableView } from '../models/user-table-view';

@Injectable()
export class UserTableHttpService {

constructor(private _http: HttpClient) { }

  public getUsers(): Observable<UserTableView> {
    const url = 'http://localhost:5000/api/users/';

    return this._http.get<UserTableView>(url);
  }

}
