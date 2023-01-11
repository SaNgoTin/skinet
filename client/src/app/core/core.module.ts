import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NarBarComponent} from './nar-bar/nar-bar.component'
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [NarBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [NarBarComponent]
})
export class CoreModule { }
