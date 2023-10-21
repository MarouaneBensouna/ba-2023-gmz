import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterGoodPageRoutingModule } from './register-good-routing.module';

import { RegisterGoodPage } from './register-good.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterGoodPageRoutingModule
  ],
  declarations: [RegisterGoodPage]
})
export class RegisterGoodPageModule {}
