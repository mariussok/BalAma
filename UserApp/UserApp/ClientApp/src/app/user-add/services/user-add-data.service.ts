import { Injectable } from '@angular/core';
import { UserAddHttpService } from './user-add-http.service';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UserAddDataService {

  constructor(private _userAddHttpService: UserAddHttpService,
              private snackBar: MatSnackBar) { }

  public addUser(user: User): void {
    this._userAddHttpService.addUser(user).subscribe(response => {
      this.snackBar.open('Success', '', {
        duration: 3000
      });
    }, error => {
      this.snackBar.open(error.message, '', {
        duration: 3000
      });
    })
  }
}
