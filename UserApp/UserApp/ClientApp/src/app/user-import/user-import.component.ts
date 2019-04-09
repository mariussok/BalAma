import { Component, OnInit } from '@angular/core';
import { UserImportDataService } from './services/user-import-data.service';

@Component({
  selector: 'app-user-import',
  templateUrl: './user-import.component.html',
  styleUrls: ['./user-import.component.css']
})
export class UserImportComponent implements OnInit {

  constructor(private _userService: UserImportDataService) { }

  ngOnInit() {
  }

  public handleFileInput(files: FileList): void {
    console.log(files);
    this._userService.uploadFile(files.item(0));
  }
}
