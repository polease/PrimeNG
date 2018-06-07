import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AppComponent} from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent}, //This was a dummy route I added just to have something
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);