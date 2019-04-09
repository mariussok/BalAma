import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserImportComponent } from './user-import/user-import.component';
import { UserAddComponent } from './user-add/user-add.component';
import {MatTableModule, MatInputModule, MatNativeDateModule, MatSnackBarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserAddDataService } from './user-add/services/user-add-data.service';
import { UserAddHttpService } from './user-add/services/user-add-http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserTableDataService } from './users-table/services/user-table-data.service';
import { UserTableHttpService } from './users-table/services/user-table-http.service';
import { UserImportDataService } from './user-import/services/user-import-data.service';
import { UserImportHttpService } from './user-import/services/user-import-http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UsersTableComponent,
    UserImportComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'users', component: UsersTableComponent },
      { path: 'add', component: UserAddComponent },
      { path: 'import', component: UserImportComponent },
    ])
  ],
  providers: [UserAddDataService,
              UserAddHttpService,
              UserTableDataService,
              UserTableHttpService,
              UserImportHttpService,
              UserImportDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
