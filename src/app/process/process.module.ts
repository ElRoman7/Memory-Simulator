import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PartitionModule } from '../partition/partition.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ProcessPageComponent,
    CardComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    CardComponent
  ]
})
export class ProcessModule { }
