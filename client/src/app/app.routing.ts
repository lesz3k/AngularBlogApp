import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { RootComponent } from './root/root.component';

export const AppRoutes: Routes = [
    { path: '', component: RootComponent, pathMatch: 'full' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
