import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './models/user';
import { UserAddDataService } from './services/user-add-data.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserAddDataService) { }

  ngOnInit() {
    this.createFormControl();
  }

  public onSubmit(): void {
    console.log(this.userForm.value);
    const user = Object.assign(new User(), this.userForm.value);
    this._userService.addUser(user);
  }

  private createFormControl(): void {
    this.userForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      additionalInfo: [''],
    })
  }
}
