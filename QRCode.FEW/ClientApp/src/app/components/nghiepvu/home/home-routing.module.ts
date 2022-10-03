import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { VanbanComponent } from './vanban/vanban.component';
import { VcardComponent } from './vcard/vcard.component';

const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    { path: 'van-ban', component: VanbanComponent },
    { path: 'v-card', component: VcardComponent },
    { path: '', redirectTo: 'van-ban', pathMatch: 'full' }
    
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
