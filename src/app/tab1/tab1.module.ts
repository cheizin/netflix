import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { ModalPageModule } from '../modal/modal.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    
    HttpClientModule,
    FormsModule,
    Tab1PageRoutingModule,
    SharedDirectivesModule,
    ModalPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
