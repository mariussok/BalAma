/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAddHttpService } from './user-add-http.service';

describe('Service: UserAddHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAddHttpService]
    });
  });

  it('should ...', inject([UserAddHttpService], (service: UserAddHttpService) => {
    expect(service).toBeTruthy();
  }));
});
