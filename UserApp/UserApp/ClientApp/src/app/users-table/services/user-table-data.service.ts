import { Injectable } from '@angular/core';
import { UserTableHttpService } from './user-table-http.service';
import { UserTableView } from '../models/user-table-view';

@Injectable()
export class UserTableDataService {

constructor(private _userHttpService: UserTableHttpService) { }

  public data = new Array<UserTableView>();

  public getUsers(): void {
    this._userHttpService.getUsers().subscribe((response: UserTableView) => {
      console.log(response);
      this.data = Object.assign(new Array<UserTableView>(), response);
    }, error => {
      console.log(error);

    })
  }
}
