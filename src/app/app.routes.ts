import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { MenuComponent } from './menu/menu.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'sensorData', component: SensorDataComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LoginComponent },
    { path: 'menu', component: MenuComponent }
];
