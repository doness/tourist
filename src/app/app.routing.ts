import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from "app/core/layouts/full-layout/full-layout.component";
import { PartialLayoutComponent } from "app/core/layouts/partial-layout/partial-layout.component";

//Layouts



export const routes: Routes = [
  {
    path: '',
    component: PartialLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: './main/home/home.module#HomeModule'
      },
      {
        path: 'details/:id',
        pathMatch: 'full',
        loadChildren: './main/details/details.module#DetailsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
