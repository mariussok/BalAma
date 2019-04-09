/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserTableDataService } from './user-table-data.service';

describe('Service: UserTableData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTableDataService]
    });
  });

  it('should ...', inject([UserTableDataService], (service: UserTableDataService) => {
    expect(service).toBeTruthy();
  }));
});
