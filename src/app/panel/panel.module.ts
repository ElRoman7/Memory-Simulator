import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PartitionModule } from '../partition/partition.module';
import { ProcessModule } from '../process/process.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    PartitionModule,
    ProcessModule,
    SharedModule,
    MaterialModule
  ]
})
export class PanelModule { }
