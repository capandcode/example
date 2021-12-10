import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BlockprocessformComponent } from './components/blockprocessform/blockprocessform.component';
import { BlockprocessingComponent } from './components/blockprocessing/blockprocessing.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'blockprocessing',
        component: BlockprocessingComponent,
        // outlet:'bp1'
      },
      {
        path: 'blockprocessing',
        component: BlockprocessformComponent,
        // outlet:'bp2'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimsRoutingModule {}
