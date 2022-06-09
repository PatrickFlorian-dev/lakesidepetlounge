import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';

import { AdminPagesComponent } from './adminpages.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPagesComponent,
    children: [
      {
        path: 'home',
        component: HomepageComponent,
      },
      {
        path: 'add-client',
        component: AddClientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AdminPagesRoutingModule {
}

