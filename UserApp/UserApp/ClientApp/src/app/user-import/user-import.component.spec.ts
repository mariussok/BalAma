/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserImportComponent } from './user-import.component';

describe('UserImportComponent', () => {
  let component: UserImportComponent;
  let fixture: ComponentFixture<UserImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
