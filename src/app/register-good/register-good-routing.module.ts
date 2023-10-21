import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterGoodPage } from './register-good.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterGoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterGoodPageRoutingModule {}
