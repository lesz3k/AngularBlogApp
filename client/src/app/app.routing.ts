import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { RootComponent } from './root/root.component';
import { BlogListComponent } from './blog-list/blog-list.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BlogListComponent },
  { path: '', component: RootComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
