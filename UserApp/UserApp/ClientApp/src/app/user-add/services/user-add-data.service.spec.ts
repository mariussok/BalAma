/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAddDataService } from './user-add-data.service';

describe('Service: UserAddData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAddDataService]
    });
  });

  it('should ...', inject([UserAddDataService], (service: UserAddDataService) => {
    expect(service).toBeTruthy();
  }));
});
