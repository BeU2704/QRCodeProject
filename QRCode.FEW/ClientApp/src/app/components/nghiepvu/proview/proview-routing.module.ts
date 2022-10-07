import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviewComponent } from './proview.component';

const routes: Routes = [{ path: '', component: ProviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviewRoutingModule { }
