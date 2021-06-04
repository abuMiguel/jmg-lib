import { NgModule } from '@angular/core';
import { SocialMediaComponent } from './social-media.component';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SocialMediaComponent
  ]
})
export class JmgLibModule { }
