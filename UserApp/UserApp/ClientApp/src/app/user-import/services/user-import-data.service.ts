import { Injectable } from '@angular/core';
import { UserImportHttpService } from './user-import-http.service';

@Injectable()
export class UserImportDataService {

constructor(private _userHtpService: UserImportHttpService) { }

  public uploadFile(fileToUpload: File): void {
    this._userHtpService.uploadFile(fileToUpload).subscribe(response => {
      console.log(response);
      
    }, error => {
      console.log(error);
      
    })
  }

}
