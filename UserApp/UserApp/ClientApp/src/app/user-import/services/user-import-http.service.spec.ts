/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserImportHttpService } from './user-import-http.service';

describe('Service: UserImportHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserImportHttpService]
    });
  });

  it('should ...', inject([UserImportHttpService], (service: UserImportHttpService) => {
    expect(service).toBeTruthy();
  }));
});
