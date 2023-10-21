import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordGoodPage } from './reset-password-good.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordGoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordGoodPageRoutingModule {}
