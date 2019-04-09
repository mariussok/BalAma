import { Component, OnInit } from '@angular/core';
import { UserTableView } from './models/user-table-view';
import { UserTableDataService } from './services/user-table-data.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  public data = new Array<UserTableView>();
  public displayedColumns: string[] = ['name', 'email', 'dateOfBirth', 'additionalInfo'];

  constructor(public userService: UserTableDataService) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser(): void {
    this.userService.getUsers();
  }
}
