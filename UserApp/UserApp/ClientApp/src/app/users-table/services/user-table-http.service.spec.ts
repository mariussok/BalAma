/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserTableHttpService } from './user-table-http.service';

describe('Service: UserTableHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTableHttpService]
    });
  });

  it('should ...', inject([UserTableHttpService], (service: UserTableHttpService) => {
    expect(service).toBeTruthy();
  }));
});
