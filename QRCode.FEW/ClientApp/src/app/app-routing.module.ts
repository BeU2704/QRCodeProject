import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DichvuComponent } from './components/nghiepvu/dichvu/dichvu.component';

const routes: Routes = [  
  { path: 'dich-vu', component: DichvuComponent },
  { path: 'qrfree', loadChildren: () => import('./components/nghiepvu/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'qrfree', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
