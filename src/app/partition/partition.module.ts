import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartitionRoutingModule } from './partition-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { PartitionPageComponent } from './pages/partition-page/partition-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    PartitionPageComponent,
    NewPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PartitionRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    CardComponent
  ]
})
export class PartitionModule { }
