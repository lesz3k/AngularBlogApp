import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { RootComponent } from './root/root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AddPostComponent } from './add-post/add-post.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BlogListComponent },
  { path: 'home/post-entry/:id', component: SinglePostComponent},
  { path: 'home/add-post', component: AddPostComponent },
  { path: '', component: RootComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
