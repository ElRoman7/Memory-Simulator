import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'process',
    loadChildren: () => import('./process/process.module').then(m => m.ProcessModule)
  },
  {
    path: 'partition',
    loadChildren: () => import('./partition/partition.module').then(m => m.PartitionModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)
  },
  {
    path: '',
    redirectTo: 'process',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
