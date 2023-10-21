import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordGoodPageRoutingModule } from './reset-password-good-routing.module';

import { ResetPasswordGoodPage } from './reset-password-good.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordGoodPageRoutingModule
  ],
  declarations: [ResetPasswordGoodPage]
})
export class ResetPasswordGoodPageModule {}
