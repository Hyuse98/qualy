import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: AppComponent }
];
