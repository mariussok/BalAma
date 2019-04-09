/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserImportDataService } from './user-import-data.service';

describe('Service: UserImportData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserImportDataService]
    });
  });

  it('should ...', inject([UserImportDataService], (service: UserImportDataService) => {
    expect(service).toBeTruthy();
  }));
});
