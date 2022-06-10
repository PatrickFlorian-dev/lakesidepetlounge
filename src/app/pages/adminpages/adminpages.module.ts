import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminPagesRoutingModule } from './adminpages-routing.module';
import { AdminPagesComponent } from './adminpages.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    AdminPagesRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSignaturePadModule,
  ],
  declarations: [
    AdminPagesComponent,
    HomepageComponent,
    AddClientComponent,
  ],
})
export class AdminPagesModule { }
