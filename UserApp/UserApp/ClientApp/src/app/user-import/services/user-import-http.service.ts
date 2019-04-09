import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserImportHttpService {

constructor(private _http: HttpClient) { }

  public uploadFile(fileToUpload: File): Observable<any> {
    const url = 'http://localhost:5000/api/users/Upload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);

    return this._http.post<any>(url, formData);
  }

}
