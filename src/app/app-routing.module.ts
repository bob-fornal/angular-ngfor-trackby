import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WithComponent } from './pages/with/with.component';
import { WithoutComponent } from './pages/without/without.component';

const routes: Routes = [
  { path: 'with', component: WithComponent },
  { path: 'without', component: WithoutComponent },
  { path: '',   redirectTo: '/with', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
