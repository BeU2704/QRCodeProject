import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VanbanComponent } from './components/nghiepvu/vanban/vanban.component';
import { VcardComponent } from './components/nghiepvu/vcard/vcard.component';

const routes: Routes = [
  { path: 'van-ban', component: VanbanComponent },
  { path: 'v-card', component: VcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
