import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminSkeletonComponent } from "@layouts/admin-skeleton/admin-skeleton.component";
import { AdminDashboardComponent } from "@modules/admin/admin-dashboard/admin-dashboard.component";
import { UserAddComponent } from "@modules/admin/user-add/user-add.component";
import { UserEditComponent } from "@modules/admin/user-edit/user-edit.component";
import { UserListComponent } from "@modules/admin/user-list/user-list.component";

const routes: Routes =[
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('@modules/auth/auth.module').then ( (m) => m.AuthModule )
  },
  {
    path:'admin',
    component: AdminSkeletonComponent,
    children: [
      {
        path:'admin-dashboard',
        component: AdminDashboardComponent,
        loadChildren: () =>
        import('@modules/admin/admin.module').then ( (m) => m.AdminModule )
      },
      {
        path:'add-user',
        component: UserAddComponent,
        loadChildren: () =>
        import('@modules/admin/admin.module').then ( (m) => m.AdminModule )
      },
      {
        path:'list-user',
        component: UserListComponent,
        loadChildren: () =>
        import('@modules/admin/admin.module').then ( (m) => m.AdminModule )
      },
      {
        path:'edit-user',
        component: UserEditComponent,
        loadChildren: () =>
        import('@modules/admin/admin.module').then ( (m) => m.AdminModule )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
