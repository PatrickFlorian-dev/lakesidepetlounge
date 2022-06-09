import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

