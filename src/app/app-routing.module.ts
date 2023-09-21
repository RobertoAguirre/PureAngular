import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplelistComponent } from './components/simplelist/simplelist.component';

const routes: Routes = [
  { path: '', component: SimplelistComponent, pathMatch:'full' },
  { path: 'simplelist', component: SimplelistComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
